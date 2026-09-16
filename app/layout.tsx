import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ShopHub",
  description: "Catálogo de productos con Next.js y React Context",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <CartProvider>
          <Header />
          <main className="mx-auto max-w-5xl p-4">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}