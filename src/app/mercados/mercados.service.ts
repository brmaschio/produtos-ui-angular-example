import { Injectable } from '@angular/core';

export class MercadosFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 25;
}

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  constructor() { }
}
