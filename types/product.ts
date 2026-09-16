//forma de los datos que llega desde la api 
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  stock: number;
}

//se heredan todos los campos de product, para no tener que agregar campos en otro lado que interface de product
export interface ProductDetail extends Product {
  description: string;
  brand?: string; 
}

export interface CartItem {
  product: Product;
  quantity: number;
}