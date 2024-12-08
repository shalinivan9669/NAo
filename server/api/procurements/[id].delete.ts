// server/api/procurements/[id].delete.ts
import { defineEventHandler, sendError, createError, getHeader } from 'h3';
import db from '../../utils/db';
import jwt from 'jsonwebtoken';
import { getRouterParam } from 'h3';
import fs from 'fs';
import path from 'path';

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

export default defineEventHandler(async (event) => {
  console.log('DELETE procurements API called');
  
  const id = getRouterParam(event, 'id');

  if (!id || typeof id !== 'string') {
    console.log('DELETE error: Недопустимый ID');
    throw createError({ statusCode: 400, statusMessage: 'Недопустимый ID' });
  }

  // Аутентификация
  try {
    authenticate(event);
    console.log('Authentication successful');
  } catch (error) {
    console.log('Authentication failed:', error);
    sendError(event, error);
    return;
  }

  await db.read();
  db.data ||= { procurements: [], users: [] };

  const procurementIndex = db.data.procurements.findIndex((p) => p.id === id);
  if (procurementIndex === -1) {
    console.log('DELETE error: Закупка не найдена');
    throw createError({ statusCode: 404, statusMessage: 'Закупка не найдена' });
  }

  const deletedProcurement = db.data.procurements.splice(procurementIndex, 1)[0];

  // Удаляем связанные файлы, если они существуют
  if (deletedProcurement.fileUrls && deletedProcurement.fileUrls.length > 0) {
    deletedProcurement.fileUrls.forEach((url) => {
      const filePath = path.join(process.cwd(), 'public', url);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    });
  }

  await db.write();

  console.log('DELETE success: Procurement deleted:', deletedProcurement);

  return { data: deletedProcurement };
});
