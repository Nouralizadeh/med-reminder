"use client";
import React, { useEffect, useState } from "react";
import { logout } from "@/services/authenticationService";
import { useRouter } from "next/navigation";

function LogoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    setError(null);
    setLoading(true);

    try {
      await logout();
      router.replace("/");
      router.refresh();
    } catch (err: any) {
      setError(err?.message ?? "خطا در خروج");
    } finally {
      setLoading(false);
    }
  };
  return <div>{loading ? "loging out..." : error}</div>;
}

export default LogoutPage;
