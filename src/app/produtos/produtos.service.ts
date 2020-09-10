import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ProdutosFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 25;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private categoriasURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.categoriasURL = 'http://localhost:8080/categorias';
  }

  buscarCategorias(): Promise<any> {

    return this.http.get<any>(this.categoriasURL).toPromise().then(response => {

      return response.map(categoria => ({ label: categoria.nome, value: categoria }));

    });

  }

}
