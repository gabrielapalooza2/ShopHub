"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const { items, removeFromCart, totalItems, totalPrice } = useCart();


  if (items.length === 0) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-bold">Mi carrito</h1>
        <p className="mb-4 text-gray-600">No has agregado productos todavía.</p>
        <Link href="/" className="text-blue-700 hover:underline">
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Mi carrito</h1>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.product.id}
            className="rounded-lg border border-gray-300 bg-white p-4"
          >
            <p className="font-bold">{item.product.title}</p>
            <p className="text-gray-600">Cantidad: {item.quantity}</p>
            <p className="text-gray-600">Precio: ${item.product.price}</p>
            <button
        type="button"
        onClick={() => removeFromCart(item.product.id)}
        className="mt-auto rounded bg-blue-700 p-2 text-white hover:bg-blue-800"
      >
        Quitar
      </button>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="mt-4 inline-block text-blue-700 hover:underline"
      >
        Seguir comprando
      </Link>
      <Link 
      href = "/checkout"> pagar</Link>
    </div>

  );
}