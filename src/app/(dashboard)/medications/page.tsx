"use client";
import React from "react";
import { medications } from "@/lib/mockData";
import MedicationCard from "@/components/MedicationCard";

export default function MedicationsPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>داروهای من</h1>
      {medications.map((med) => (
        <MedicationCard key={med.id} medication={med} />
      ))}
    </div>
  );
}
