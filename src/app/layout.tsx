import type { Metadata } from "next";
import "@/styles/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Maitê Tikami - Odontologia Estética e Implantes",
  description: "Sua saúde e seu sorriso são a minha missão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
