import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="min-h-screen flex flex-col px-4 bg-slate-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
