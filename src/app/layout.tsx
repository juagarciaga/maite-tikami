import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maitê Tikami - Odontologia Estética e Implantes",
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
