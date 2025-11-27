"use client";

import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMedications } from "@/services/medicationService";
import Loader from "@/components/Loader";

function MedicationsList() {
  const { data: medications } = useQuery({
    queryKey: ["medications"],
    queryFn: getMedications,
    suspense: true, // فعال کردن Suspense
  });

  return (
    <ul className="space-y-2">
      {medications?.map((med) => (
        <li key={med.id} className="p-2 border rounded">
          {med.name} - {med.dose} - {med.timesPerDay} times/day
        </li>
      ))}
    </ul>
  );
}

export default function MedicationsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <MedicationsList />
    </Suspense>
  );
}
