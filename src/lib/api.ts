import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br", 
});

export interface Cep {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}


export async function getCep(cep: string): Promise<Cep> {
  const response = await api.get<Cep>(`/ws/${cep}/json`);
  return response.data;
}
