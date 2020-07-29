import { ServicoBusca } from './servico-prestado/servico-list/servicoBusca';
import { Servico } from './servico-prestado/servico';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURl + '/api/servicos';

  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${this.apiURL}`, servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<ServicoBusca[]> {
    const httpParams = new HttpParams()
      .set('nome', nome)
      .set('mes', mes.toString());
    if (!nome) {
      nome = '';
    }
    const url = this.apiURL + '?' + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }

  buscarTodos(): Observable<ServicoBusca[]> {
    return this.http.get<ServicoBusca[]>(`${this.apiURL}`);
  }
}
