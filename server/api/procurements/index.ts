// server/api/procurements/index.ts
import { defineEventHandler, sendError, createError, getQuery, getHeader } from 'h3';
import db from '../../utils/db';
import type { Procurement } from '../../../types/types';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import multer from 'multer';

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
  } catch (error) {
    throw createError({ statusCode: 401, statusMessage: 'Неверный токен' });
  }
};

// Настройка хранилища для файлов
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}-${file.originalname}`);
  },
});

// Настройка multer для поддержки нескольких файлов
const upload = multer({ storage }).array('files');

export default defineEventHandler(async (event) => {
  console.log('Procurements API called with method:', event.node.req.method);
  const method = event.node.req.method;

  await db.read();
  db.data ||= { procurements: [], users: [] };

  if (method === 'GET') {
    // Обработка GET запроса с пагинацией
    const { page = '1', limit = '10' } = getQuery(event);
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);

    const start = (pageNumber - 1) * limitNumber;
    const end = start + limitNumber;

    const procurements = db.data.procurements.slice(start, end);
    const total = db.data.procurements.length;

    console.log('GET procurements:', procurements);

    return {
      data: procurements,
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
    };
  } else if (method === 'POST') {
    // Аутентификация только для POST запросов
    try {
      authenticate(event);
      console.log('Authentication successful');
    } catch (error) {
      console.log('Authentication failed:', error);
      sendError(event, error);
      return;
    }

    // Используем multer для обработки multipart/form-data
    await new Promise<void>((resolve, reject) => {
      upload(event.node.req, event.node.res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    try {
      const body = event.node.req.body;
      const files = (event.node.req as any).files as Express.Multer.File[];

      const { title, description, createdAt, endDate } = body;

      if (!title || !description) {
        console.log('POST error: Недостаточно данных');
        throw createError({ statusCode: 400, statusMessage: 'Недостаточно данных' });
      }

      const fileUrls = files ? files.map((file) => `/uploads/${file.filename}`) : [];

      const newProcurement: Procurement = {
        id: uuidv4(),
        title,
        description,
        createdAt: createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        endDate: endDate || '',
        fileUrls,
      };

      db.data.procurements.push(newProcurement);
      await db.write();

      console.log('POST success: New procurement added:', newProcurement);

      return newProcurement;
    } catch (error) {
      console.log('POST error:', error);
      sendError(event, error);
      return;
    }
  } else {
    // Метод не разрешён
    console.log('Unsupported method:', method);
    sendError(event, createError({ statusCode: 405, statusMessage: 'Метод не разрешён' }));
  }
});
