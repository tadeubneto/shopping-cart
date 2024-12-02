'use client'

import { useCart } from '@/contexts/CartContext';

const products = [
  {
    id: 1,
    name: "Tênis Nike",
    price: 299.99,
    image: "https://imgnike-a.akamaihd.net/1920x1920/0117777UA9.jpg"
  },
  {
    id: 2,
    name: "Camiseta Adidas",
    price: 89.99,
    image: "https://imgcentauro-a.akamaihd.net/768x768/99050502.jpg"
  },
  {
    id: 3,
    name: "Mochila Nike",
    price: 99.69,
    image: "https://imgnike-a.akamaihd.net/1920x1920/013902IDA11.jpg"
  },
  {
    id: 4,
    name: "Tênis Nike",
    price: 299.99,
    image: "https://imgnike-a.akamaihd.net/1920x1920/0117777UA9.jpg"
  },
  {
    id: 5,
    name: "Camiseta Adidas",
    price: 89.99,
    image: "https://imgcentauro-a.akamaihd.net/768x768/99050502.jpg"
  },
  {
    id: 6,
    name: "Mochila Nike",
    price: 99.69,
    image: "https://imgnike-a.akamaihd.net/1920x1920/013902IDA11.jpg"
  }

];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div 
          key={product.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">
            R$ {product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}