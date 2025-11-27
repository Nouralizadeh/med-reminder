// app/add-medication/page.tsx
"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Providers from "../providers";

function AddMedicationContent() {
  const [formData, setFormData] = useState({
    name: "",
    dosesPerDay: 1,
    doseAmount: "",
    startDate: new Date().toISOString().split('T')[0],
    endDate: "",
    notes: ""
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newMedication: any) => {
      // TODO: جایگزین با API واقعی
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { 
        id: Date.now().toString(), 
        ...newMedication,
        reminders: [],
        history: [],
        interactions: []
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medications'] });
      router.push("/medications");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link href="/medications" className="text-gray-500 hover:text-gray-700 ml-4">
          ← بازگشت
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">افزودن داروی جدید</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow border space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">نام دارو</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="مثل: آسپیرین، پاراستامول..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">تعداد دوز در روز</label>
            <select
              value={formData.dosesPerDay}
              onChange={(e) => setFormData({...formData, dosesPerDay: parseInt(e.target.value)})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} بار</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">مقدار هر دوز</label>
            <input
              type="text"
              value={formData.doseAmount}
              onChange={(e) => setFormData({...formData, doseAmount: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              placeholder="مثل: 500mg, 1 قرص"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ شروع</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({...formData, startDate: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ پایان</label>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({...formData, endDate: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">یادداشت (اختیاری)</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            rows={3}
            placeholder="مثل: بعد از غذا مصرف شود، عوارض جانبی..."
          />
        </div>

        <button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white p-3 rounded-lg font-medium transition-colors"
        >
          {mutation.isPending ? "در حال افزودن..." : "افزودن دارو"}
        </button>
      </form>
    </div>
  );
}

export default function AddMedicationPage() {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
        <AddMedicationContent />
    </div>
  );
}