// server/utils/db.ts
import { Low, JSONFile } from 'lowdb';
import path from 'path';
import { DatabaseSchema } from '../../types/types';

// Определите путь к базе данных
const file = path.resolve('./server/api/database.json');

// Создайте адаптер для Lowdb
const adapter = new JSONFile<DatabaseSchema>(file);
const db = new Low<DatabaseSchema>(adapter);

// Инициализация базы данных
const initDB = async () => {
  await db.read();
  db.data ||= { procurements: [], users: [] };
  await db.write();
};

// Вызов инициализации базы данных при старте сервера
initDB();

export default db;
