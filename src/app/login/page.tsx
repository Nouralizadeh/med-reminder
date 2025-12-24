//src\app\login\page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, login } from "@/services/authenticationService";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (useAuthStore.getState().user) router.replace("/");
    try {
      await login(email, password);
      const user = await getUser();
      useAuthStore.getState().setUser(user);
      console.log("auth hydrated", useAuthStore.getState());
      router.replace("/"); // بعد از لاگین میره داشبورد
    } catch (err: any) {
      setError(err.message ?? "خطا در ورود");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow border"
      >
        <h1 className="text-xl font-bold mb-4 text-center">
          ورود به حساب کاربری
        </h1>

        {error && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label className="block text-sm mb-1">ایمیل</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">رمز عبور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "در حال ورود..." : "ورود"}
        </button>
      </form>
    </div>
  );
}
