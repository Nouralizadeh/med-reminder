"use client";
import React from "react";
import {
  IconMedicineSyrup,
  IconPlus,
  IconHistory,
  IconSettings,
  IconBell,
  IconHome,
} from "@tabler/icons-react";
import { NavLink, Stack } from "@mantine/core";
import Link from "next/link";

const navItems = [
  { icon: IconHome, label: "خانه", href: "/", color: "blue" },
  {
    icon: IconMedicineSyrup,
    label: "داروهای من",
    href: "/medications",
    color: "indigo",
  },
  {
    icon: IconPlus,
    label: "افزودن دارو",
    href: "/add-medication",
    color: "teal",
  },
  { icon: IconHistory, label: "تاریخچه", href: "/history", color: "orange" },
  { icon: IconBell, label: "یادآوری‌ها", href: "/reminders", color: "red" },
  { icon: IconSettings, label: "تنظیمات", href: "/settings", color: "gray" },
];

export default function Navbar() {
  return (
    <Stack gap="xs">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          component={Link}
          href={item.href}
          label={item.label}
          leftSection={<item.icon size={20} />}
          color={item.color}
          variant="filled"
        />
      ))}
    </Stack>
  );
}
