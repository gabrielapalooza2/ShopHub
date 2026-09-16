"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { fetchProductById } from "@/lib/api";
import type { ProductDetail } from "@/types/product";

export default function ProductDetailPage() {

  const params = useParams();
  const id = String(params.id);

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch {
        setError("No se pudo cargar el producto");
      }
      setLoading(false);
    }

    load();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }


  if (error || product === null) {
    return (
      <div>
        <p className="text-red-700">{error || "Producto no encontrado"}</p>
        <Link href="/" className="text-blue-700 hover:underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/" className="text-blue-700 hover:underline">
        Volver al catálogo
      </Link>

      <div className="mt-4 grid gap-6 rounded-lg border border-gray-300 bg-white p-4 md:grid-cols-2">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
          className="mx-auto object-contain"
        />

        <div>
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          {/* Solo se pinta si el producto trae marca */}
          {product.brand && (
            <p className="text-gray-600">Marca: {product.brand}</p>
          )}

          <p className="mt-4 text-2xl font-bold">${product.price}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>

          <p className="mt-4">{product.description}</p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-4 rounded bg-blue-700 p-2 text-white hover:bg-blue-800"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}