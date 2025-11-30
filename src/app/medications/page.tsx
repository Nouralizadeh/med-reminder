// app/medications/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getMedications } from "@/services/medicationService";
import MedicationCard from "@/components/MedicationCard";
import Link from "next/link";

function MedicationsContent() {
  const {
    data: medications,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["medications"],
    queryFn: getMedications,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-40">
        <div className="text-lg text-gray-600">در حال بارگذاری داروها...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <div className="text-red-600 font-medium">خطا در بارگذاری داروها</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded text-sm"
        >
          تلاش مجدد
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">داروهای من</h1>
        <Link
          href="/add-medication"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          ➕ افزودن دارو
        </Link>
      </div>

      <div className="space-y-4">
        {medications?.map((medication) => (
          <MedicationCard key={medication.id} medication={medication} />
        ))}
      </div>

      {medications?.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-6xl mb-4">💊</div>
          <div className="text-gray-500 text-lg mb-4">
            هنوز دارویی اضافه نکرده‌اید
          </div>
          <Link
            href="/add-medication"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            افزودن اولین دارو
          </Link>
        </div>
      )}
    </div>
  );
}

export default function MedicationsPage() {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <MedicationsContent />
    </div>
  );
}
