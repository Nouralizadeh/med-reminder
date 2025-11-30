// app/page.tsx
"use client";

import {
  AppShell,
  NavLink,
  Card,
  Group,
  Text,
  Stack,
  Title,
  SimpleGrid,
} from "@mantine/core";
import {
  IconMedicineSyrup,
  IconPlus,
  IconHistory,
  IconSettings,
  IconBell,
  IconHome,
} from "@tabler/icons-react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

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

export default function HomePage() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      {/* محتوای همون صفحه اصلی */}
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <IconMedicineSyrup
              size={30}
              color="var(--mantine-color-indigo-6)"
            />
            <div>
              <Text fw={700} size="lg">
                Med Reminder
              </Text>
              <Text size="sm" c="dimmed">
                مدیریت هوشمند مصرف دارو
              </Text>
            </div>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
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
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="lg">
          <Card withBorder>
            <Title order={2}>سلام! 👋</Title>
            <Text c="dimmed">به اپلیکیشن مدیریت دارو خوش آمدید</Text>
          </Card>

          <SimpleGrid cols={{ base: 2, sm: 3 }}>
            <Card
              component={Link}
              href="/medications"
              withBorder
              padding="lg"
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <IconMedicineSyrup
                size={32}
                color="var(--mantine-color-indigo-6)"
                style={{ margin: "0 auto 8px" }}
              />
              <Text fw={500}>داروهای من</Text>
            </Card>

            <Card
              component={Link}
              href="/add-medication"
              withBorder
              padding="lg"
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <IconPlus
                size={32}
                color="var(--mantine-color-teal-6)"
                style={{ margin: "0 auto 8px" }}
              />
              <Text fw={500}>افزودن دارو</Text>
            </Card>

            <Card
              component={Link}
              href="/history"
              withBorder
              padding="lg"
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <IconHistory
                size={32}
                color="var(--mantine-color-orange-6)"
                style={{ margin: "0 auto 8px" }}
              />
              <Text fw={500}>تاریخچه</Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
