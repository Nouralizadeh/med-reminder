// services/medicationService.ts
import { Medication } from "@/types/medication";
import { medications } from "@/lib/mockData";

export async function getMedications(): Promise<Medication[]> {
  // شبیه سازی تاخیر network
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(medications);
    }, 1000);
  });
}
