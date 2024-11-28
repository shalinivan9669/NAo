// types/Procurement.ts
export interface Procurement {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    endDate: string; // Новое поле
    fileUrl?: string; // Добавим поле для ссылки на PDF-файл
  }