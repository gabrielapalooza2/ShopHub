import type { Product, ProductDetail } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

//trae los productos del catálogo 
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(
    `${BASE_URL}?limit=8&select=id,title,price,category,thumbnail,stock`
  );

  if (!res.ok) {
    throw new Error("No se pudo cargar el catálogo");
  }

  //la api envuelve el arreglo dentro de una propiedad products 
  const data: { products: Product[] } = await res.json();
  return data.products;
}

//trae un solo producto con su info completa

export async function fetchProductById(id: string): Promise<ProductDetail> {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("No se pudo cargar el producto");
  }

  return res.json();
}