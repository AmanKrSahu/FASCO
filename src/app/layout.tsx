import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Volkhov } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FASCO",
  description: "E-Commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
