"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-blue-700">
          ShopHub
        </Link>

        <p className="text-gray-700">
          Carrito: <span className="font-bold">{totalItems}</span>
        </p>
      </div>
    </header>
  );
}