"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-300 bg-white p-4">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto h-40 w-40 object-contain"
        />
      </Link>

      <p className="mt-2 text-sm text-gray-500">{product.category}</p>

      <Link
        href={`/products/${product.id}`}
        className="font-bold text-blue-700 hover:underline"
      >
        {product.title}
      </Link>

      <p className="mt-2 text-lg font-bold">${product.price}</p>
      <p className="text-sm text-gray-600">Stock: {product.stock}</p>

      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="mt-auto rounded bg-blue-700 p-2 text-white hover:bg-blue-800"
      >
        Agregar al carrito
      </button>
    </div>
  );
}