import { create } from "zustand";
import type { Medication, Reminder } from "@/types";
import { medications as mockMedications } from "@/lib/mockData";

interface MedicationState {
  medications: Medication[];
  addMedication: (med: Medication) => void;
  updateMedication: (med: Medication) => void;
  removeMedication: (id: string) => void;
  toggleReminder: (medId: string, reminderId: string) => void;
}

export const useMedicationStore = create<MedicationState>((set) => ({
  medications: mockMedications,

  addMedication: (med) =>
    set((state) => ({
      medications: [...state.medications, med],
    })),

  updateMedication: (updated) =>
    set((state) => ({
      medications: state.medications.map((m) =>
        m.id === updated.id ? updated : m,
      ),
    })),

  removeMedication: (id) =>
    set((state) => ({
      medications: state.medications.filter((m) => m.id !== id),
    })),

  toggleReminder: (medId, reminderId) =>
    set((state) => ({
      medications: state.medications.map((m) => {
        if (m.id !== medId) return m;
        return {
          ...m,
          reminders: m.reminders.map((r) =>
            r.id === reminderId ? { ...r, notified: !r.notified } : r,
          ),
        };
      }),
    })),
}));
