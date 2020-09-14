export class Produto {
  id: number;
	nome: string;
	imagem: string;
	status: Status.ATIVO;
	codigoDeBarras: string;
	categoria = new Categoria();
}

export class Categoria {
  id: number;
	nome: string;
	imagem: string;
}

export class Mercado {
  id: number;
  cnpj: string;
  nome: string;
  nomeFantasia: string;
  status: Status.ATIVO;
  logradouro = new Logradouro();
  imagem: string;
}

export class Logradouro {
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  telefones: Array<String>;
}

export enum Status {
  ATIVO = "Ativo",
  INATIVO = "Inativo",
}
