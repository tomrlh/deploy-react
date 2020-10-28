export interface Cidade {
  nome: string;
  estadoId: number;
  estado: Estado;
}

interface Estado {
  nome: string;
  uf: string;
}
