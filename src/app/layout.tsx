
import RegisterSW from "./register-sw";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
