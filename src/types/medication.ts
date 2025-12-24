import { MedicationHistory } from "./history";
import { Reminder } from "./reminder";

export interface Medication {
  id: string;
  medicationUserId: string;
  name: string;
  image?: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  dosesPerDay: number;
  doseAmount: string;
  notes?: string;
  interactions?: string[];
  reminders?: Reminder[];
  history?: MedicationHistory[];
  createdAt: string;
}
