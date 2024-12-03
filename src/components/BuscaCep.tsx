'use client'

import {useState} from 'react';
import { getCep } from "@/lib/api";

export default function BuscaCep() {

    const [cep, setCep] = useState<string>(""); 
    const [cepInfo, setCepInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false); 

  const handleSearchCep = async () => {
    if (!cep) {
      alert("Por favor, insira um CEP válido.");
      return;
    }
    setLoading(true);
    try {
      const response = await getCep(cep); 
      setCepInfo(response); 
    } catch (error) {
      alert("Erro ao buscar o CEP. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <label>Calcule o Frete</label>
      <input
        id="cep"
        type="text"
        name="cep"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        placeholder="00.000-000"
        value={cep} 
        onChange={(e) => setCep(e.target.value)}
      />
      <button
        onClick={handleSearchCep} 
        className="bg-red-700 p-3 rounded mt-4"
        disabled={loading} 
      >
        {loading ? "Carregando..." : "Calcular Frete"}
      </button>

      {cepInfo && (
        <div className="mt-4">
          <p><strong>Endereço:</strong> {cepInfo.logradouro}</p>
          <p><strong>Bairro:</strong> {cepInfo.bairro}</p>
          <p><strong>Cidade:</strong> {cepInfo.localidade}</p>
          <p><strong>Estado:</strong> {cepInfo.uf}</p>
          <p>Seu frete é de: <strong>R$20,00</strong></p>
        </div>
      )}
    </div>
  );
}