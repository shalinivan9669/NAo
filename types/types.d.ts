// types/types.ts

export interface Procurement {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  endDate: string; // Новое поле
  fileUrl?: string; // Добавим поле для ссылки на PDF-файл
}

export interface User {
  id: string;
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface DatabaseSchema {
  procurements: Procurement[];
  users: User[];
}
