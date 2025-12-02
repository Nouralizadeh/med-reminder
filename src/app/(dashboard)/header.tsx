"use client";
import { Burger, Group, Text } from "@mantine/core";
import { IconMedicineSyrup } from "@tabler/icons-react";
import React from "react";
import ColorSchemesSwitcher from "./colorSchemesSwitcher";

interface IProps {
  nabvarisOpen: boolean;
  toggleNavbar: () => void;
}
export default function Header({ nabvarisOpen, toggleNavbar }: IProps) {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger opened={nabvarisOpen} onClick={toggleNavbar} size="sm" />
        <IconMedicineSyrup size={30} color="var(--mantine-color-indigo-6)" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text fw={700} size="lg">
            Med Reminder
          </Text>
          <Text size="sm" c="dimmed">
            مدیریت هوشمند مصرف دارو
          </Text>
        </div>
      </Group>

      <ColorSchemesSwitcher />
    </Group>
  );
}
