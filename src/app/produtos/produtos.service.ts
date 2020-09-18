import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Categoria, Produto } from '../core/model';
import { SecurityHttp } from '../seguranca/security-http';

export class ProdutosFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private categoriasURL: string;
  private produtosURL: string;

  constructor(
    private http: SecurityHttp
  ) {
    this.categoriasURL = `${environment.apiUrl}/categorias`;
    this.produtosURL = `${environment.apiUrl}/produtos`;
  }

  buscarProdutos(filtro: ProdutosFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString(),
      }
    });

    if (filtro.nome){
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(this.produtosURL, { params }).toPromise();

  }

  buscarProdutoPorId(id: number): Promise<Produto> {

    return this.http.get<Produto>(`${this.produtosURL}/${id}`).toPromise();

  }

  alterarStatus(id: number): Promise<Produto> {

    return this.http.put<Produto>(`${this.produtosURL}/status/${id}`, {}).toPromise();

  }

  atualizar(produto: Produto): Promise<Produto> {

    return this.http.put<Produto>(`${this.produtosURL}/${produto.id}`, produto).toPromise();

  }

  adicionar(produto: Produto): Promise<Produto> {

    return this.http.post<Produto>(this.produtosURL, produto).toPromise();

  }

  buscarCategorias(): Promise<Array<Categoria>> {

    return this.http.get<any>(this.categoriasURL).toPromise().then(response => {

      return response.map(categoria => ({ label: categoria.nome, value: categoria }));

    });

  }

  excluir(id: number): Promise<any> {

    return this.http.delete(`${this.produtosURL}/${id}`).toPromise();

  }

}
