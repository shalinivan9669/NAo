// server/api/procurements/[id].put.ts
import { defineEventHandler, sendError, createError, getHeader } from 'h3';
import db from '../../utils/db';
import type { Procurement } from '../../../types/types';
import jwt from 'jsonwebtoken';
import { getRouterParam } from 'h3';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const SECRET_KEY = process.env.JWT_SECRET || 'your_super_secret_key';

// Функция для аутентификации и проверки прав администратора
const authenticate = (event: any) => {
  const authHeader = getHeader(event, 'authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({ statusCode: 401, statusMessage: 'Не авторизован' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as any;
    if (!decoded.isAdmin) {
      throw createError({ statusCode: 403, statusMessage: 'Доступ запрещён' });
    }
    // Можно добавить декодированные данные в контекст, если необходимо
  } catch (error) {
    throw createError({ statusCode: 401, statusMessage: 'Неверный токен' });
  }
};

// Настройка хранилища для файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), 'uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).array('files');

export default defineEventHandler(async (event) => {
  // Аутентификация
  try {
    authenticate(event);
  } catch (error) {
    sendError(event, error);
    return;
  }

  const id = getRouterParam(event, 'id');

  if (!id || typeof id !== 'string') {
    sendError(event, createError({ statusCode: 400, statusMessage: 'Недопустимый ID' }));
    return;
  }

  // Используем multer для обработки multipart/form-data
  await new Promise<void>((resolve, reject) => {
    upload(event.node.req, event.node.res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  const body = event.node.req.body;
  const files = (event.node.req as any).files as Express.Multer.File[];

  const { title, description, createdAt, endDate, fileUrls } = body;

  if (!title && !description && !createdAt && !endDate && !files && !fileUrls) {
    sendError(event, createError({ statusCode: 400, statusMessage: 'Недостаточно данных для обновления' }));
    return;
  }

  await db.read();
  db.data ||= { procurements: [], users: [] };

  const procurementIndex = db.data.procurements.findIndex((p) => p.id === id);
  if (procurementIndex === -1) {
    sendError(event, createError({ statusCode: 404, statusMessage: 'Закупка не найдена' }));
    return;
  }

  // Обновление полей
  if (title) db.data.procurements[procurementIndex].title = title;
  if (description) db.data.procurements[procurementIndex].description = description;
  if (createdAt) db.data.procurements[procurementIndex].createdAt = createdAt;
  if (endDate) db.data.procurements[procurementIndex].endDate = endDate;
  db.data.procurements[procurementIndex].updatedAt = new Date().toISOString();

  if (fileUrls) {
    db.data.procurements[procurementIndex].fileUrls = JSON.parse(fileUrls);
  }

  if (files && files.length > 0) {
    // Удаляем старые файлы
    const oldFileUrls = db.data.procurements[procurementIndex].fileUrls || [];
    oldFileUrls.forEach((url) => {
      const filePath = path.join(process.cwd(), url);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting old file:', err);
      });
    });

    // Добавляем новые файлы
    const newFileUrls = files.map((file) => `/uploads/${file.filename}`);
    db.data.procurements[procurementIndex].fileUrls = newFileUrls;
  }

  await db.write();

  return db.data.procurements[procurementIndex];
});
