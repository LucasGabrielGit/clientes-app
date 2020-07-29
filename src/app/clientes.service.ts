import { ClienteBusca } from './clientes/clientes-list/clienteBusca';
import { Cliente } from './clientes/clientes';
import { Injectable, AfterViewInit } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiURL: string = environment.apiURl + '/api/clientes';

  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  delete(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

  buscar(nome: string): Observable<Cliente[]> {
    const paramsHttp = new HttpParams();
    paramsHttp.set('nome', nome);
    const url = this.apiURL + '?' + paramsHttp.toString();
    return this.http.get<any>(url);
  }
}
