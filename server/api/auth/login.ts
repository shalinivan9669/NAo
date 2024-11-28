// server/api/auth/login.ts
import { defineEventHandler, readBody, sendError, createError } from 'h3';
import db from '../../utils/db';
import { User } from '../../../types/types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_super_secret_key';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    sendError(event, createError({ statusCode: 400, statusMessage: 'Недостаточно данных' }));
    return;
  }

  const user = db.data?.users.find(u => u.username === username);
  if (!user) {
    sendError(event, createError({ statusCode: 401, statusMessage: 'Неверные учётные данные' }));
    return;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    sendError(event, createError({ statusCode: 401, statusMessage: 'Неверные учётные данные' }));
    return;
  }

  // Генерация JWT токена
  const token = jwt.sign(
    { id: user.id, username: user.username, isAdmin: user.isAdmin },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  return { token };
});
