import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import { ThemeToggle } from '@/components/ThemeToggle';
import BuscaCep from '@/components/BuscaCep';


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center">
        Black Friday
      </h1>
      
      <div className="flex justify-center items-center my-8 ">          
          <ThemeToggle />
        </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 ">
          <ProductList />
        </div>
        
        <div className="mt-4 border p-4 rounded-lg h-max mr-4">
          <h2 className="text-red-500 text-xl font-bold mb-4 text-center">
            Carrinho de Compras
          </h2>
          <Cart />                 
        </div> 

        <div className="lg:col-span-1 mt-4 border p-4 rounded-lg h-max mr-4">          
          <BuscaCep />                 
        </div> 
           
      </div>
    </main>
  );
}