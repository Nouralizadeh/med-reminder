// app/layout.tsx
import "./globals.css";
import RegisterSW from "./register-sw";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Providers from "./providers";


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body >
        <MantineProvider >
          <Providers>
            <RegisterSW />
            {children}
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}