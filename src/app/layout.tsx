import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Number Memory",
  description: "A simple game to test your number memory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
