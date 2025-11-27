import type { Medication } from "@/types";

export const medications: Medication[] = [
  {
    id: "1",
    name: "آسپیرین",
    image: "/aspirin.png",
    startDate: "2025-11-27",
    endDate: "2025-12-27",
    dosesPerDay: 2,
    doseAmount: "500mg",
    reminders: [
      { id: "r1", medicationId: "1", time: "08:00", notified: false },
      { id: "r2", medicationId: "1", time: "20:00", notified: false },
    ],
    history: [],
    notes: "بعد از غذا مصرف شود",
    interactions: ["2"],
  },
  {
    id: "2",
    name: "پاراستامول",
    image: "/paracetamol.png",
    startDate: "2025-11-27",
    endDate: "2025-12-27",
    dosesPerDay: 3,
    doseAmount: "500mg",
    reminders: [
      { id: "r3", medicationId: "2", time: "08:00", notified: false },
      { id: "r4", medicationId: "2", time: "14:00", notified: false },
      { id: "r5", medicationId: "2", time: "20:00", notified: false },
    ],
    history: [],
    notes: "",
    interactions: ["1"],
  },
];
