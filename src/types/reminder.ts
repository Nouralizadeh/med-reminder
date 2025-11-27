export interface Reminder {
  id: string; // uuid
  medicationId: string; // id دارو
  time: string; // ساعت یادآوری، فرمت "HH:mm"
  notified: boolean; // آیا نوتیفیکیشن ارسال شده؟
}