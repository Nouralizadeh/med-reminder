"use client";

import { AppShell, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "./header";
import Navbar from "./navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header nabvarisOpen={desktopOpened} toggleNavbar={toggleDesktop} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="lg">{children}</Stack>
      </AppShell.Main>
    </AppShell>
  );
}
