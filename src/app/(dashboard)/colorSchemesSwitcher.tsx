"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ColorSchemesSwitcher() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <Group>
      {colorScheme == "light" && (
        <Button
          radius={10}
          variant="default"
          onClick={() => setColorScheme("dark")}
        >
          <IconMoon size={24} />
        </Button>
      )}
      {colorScheme == "dark" && (
        <Button
          radius={10}
          variant="default"
          onClick={() => setColorScheme("light")}
        >
          <IconSun size={24} />
        </Button>
      )}
    </Group>
  );
}
