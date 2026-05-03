import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedRefill – Smart Medication Refill Reminders",
  description: "Track medication schedules, get refill reminders, and manage prescriptions automatically. Built for chronic condition patients, caregivers, and elderly patients."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="677514f8-3bde-4ce5-bd6d-163f2156116f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
