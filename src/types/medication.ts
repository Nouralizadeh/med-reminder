import { MedicationHistory } from "./history";
import { Reminder } from "./reminder";

// types/medication.ts
export interface Medication {
  id: string; // uuid
  name: string; // نام دارو
  image?: string; // مسیر عکس دارو (اختیاری)
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  dosesPerDay: number; // تعداد دفعات مصرف در روز
  doseAmount: string; // میزان دوز (مثلاً "500mg")
  reminders: Reminder[]; // لیست یادآوری‌ها
  history: MedicationHistory[]; // تاریخچه مصرف
  notes?: string; // یادداشت اضافی (اختیاری)
  interactions?: string[]; // لیست داروهای تداخل‌کننده (اختیاری)
}
