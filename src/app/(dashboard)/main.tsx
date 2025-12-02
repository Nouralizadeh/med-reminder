"use client";
import { SimpleGrid, Card, Text, Title } from "@mantine/core";
import { IconMedicineSyrup, IconPlus, IconHistory } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <>
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
    </>
  );
}
