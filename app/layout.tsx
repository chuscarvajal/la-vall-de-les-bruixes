import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Vall de les Bruixes | Adiestramiento Canino en Girona",
  description: "Adiestramiento canino en Baix Empordà, Girona. Educación positiva, socialización y modificación de conducta en entorno natural. 4.9★ en Google.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
