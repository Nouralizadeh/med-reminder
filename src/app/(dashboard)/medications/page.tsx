"use client";

import { useEffect, useState } from "react";
import MedicationCard from "@/components/MedicationCard";
import { Medication } from "@/types/medication";
import { getMedications } from "@/services/medicationService";

export default function MedicationsPage() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const data = await getMedications();
        setMedications(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedications();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>داروهای من</h1>

      {medications.length === 0 && <p>دارویی ثبت نشده است</p>}

      {medications.map((med) => (
        <MedicationCard key={med.id} medication={med} />
      ))}
    </div>
  );
}
