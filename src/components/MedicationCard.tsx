// components/MedicationCard.tsx
"use client";

import { Medication } from "@/types/medication";
import Link from "next/link";

interface Props {
  medication: Medication;
}

export default function MedicationCard({ medication }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border mb-3">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800">{medication.name}</h3>
          <p className="text-gray-600 mt-1">{medication.doseAmount}</p>
          <p className="text-sm text-gray-500 mt-1">
            {medication.dosesPerDay} بار در روز
          </p>
          {medication.notes && (
            <p className="text-sm text-blue-600 mt-2">📝 {medication.notes}</p>
          )}
        </div>

        <Link
          href={`/medications/${medication.id}`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          مشاهده
        </Link>
      </div>

      {/* زمان‌های یادآوری */}
      <div className="border-t pt-3">
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          زمان‌های مصرف:
        </h4>
        <div className="space-y-2">
          {medication.reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex justify-between items-center text-sm"
            >
              <div className="flex items-center">
                <span className="ml-2">⏰</span>
                <span className="text-gray-800">{reminder.time}</span>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  reminder.notified
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {reminder.notified ? "اطلاع داده شد" : "در انتظار"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
