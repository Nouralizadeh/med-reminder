export interface MedicationHistory {
  id: string; // uuid
  medicationId: string; // id دارو
  date: string; // YYYY-MM-DD
  takenTimes: string[]; // ساعت‌هایی که مصرف شده
  missedTimes: string[]; // ساعت‌هایی که جا افتاده
}
