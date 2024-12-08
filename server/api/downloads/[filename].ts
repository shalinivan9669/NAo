// server/api/downloads/[filename].ts
import { defineEventHandler, sendStream, createError } from 'h3';
import { join } from 'path';
import fs from 'fs';

export default defineEventHandler(async (event) => {
  const { filename } = event.context.params;

  if (!filename) {
    throw createError({ statusCode: 400, message: 'Filename is required' });
  }

  // Путь к файлу в директории public/uploads
  const filePath = join(process.cwd(), 'public', 'uploads', filename);

  // Проверяем, существует ли файл и доступен ли он для чтения
  try {
    await fs.promises.access(filePath, fs.constants.R_OK);

    // Устанавливаем заголовки для скачивания файла
    event.node.res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    event.node.res.setHeader('Content-Type', 'application/octet-stream');

    // Отправляем файл в ответ
    return sendStream(event, fs.createReadStream(filePath));
  } catch (error) {
    throw createError({ statusCode: 404, message: 'File not found' });
  }
});
