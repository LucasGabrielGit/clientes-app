import { Servico } from './servico-prestado/servico';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL:string = environment.apiURl + '/api/servicos'

  constructor(private http: HttpClient) { }


  salvar(servicoPrestado: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${this.apiURL}`, servicoPrestado)
  }
}
