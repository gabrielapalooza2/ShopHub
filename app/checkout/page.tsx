"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { totalItems } = useCart();

  const [datos, setDatos] = useState({ nombre: "", email: "", metodoPago: ""});
  const [enviado, setEnviado] = useState(false);


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    setEnviado(true);
    
  }

  if (enviado) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-bold">¡Gracias, {datos.nombre}!</h1>
        <p className="mb-4 text-gray-600">Te escribimos a {datos.email}.</p>
        <Link href="/" className="text-blue-700 hover:underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Finalizar compra</h1>
      <p className="mb-4 text-gray-600">{totalItems} productos en el carrito</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="nombre" className="mb-1 block text-sm text-gray-600">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2"
          />

        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-gray-600">
            Correo
          </label>
          <input
            id="email"
            name="email"
            value={datos.email}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-700 p-2 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}
    

    

