import { ServicoListComponent } from './../servico-list/servico-list.component';
import { Router } from '@angular/router';
import { Servico } from './../servico';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/clientes';
import { Component, OnInit } from '@angular/core';

import { ServicoPrestadoService } from '../../servico-prestado.service'
@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico: Servico
  success: boolean
  errors: String[]
  servicoLista: ServicoListComponent


  constructor(
    private clientesService: ClientesService,
    private service: ServicoPrestadoService,
    private router: Router
  ) {
    this.servico = new Servico()
  }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe(response => {
        this.clientes = response
      })
  }

  existemClientes(): boolean {
    if (this.clientes.length != 0) {
      return true;
    } else {
      return false
    }
  }

  goToNewCliente() {
    this.router.navigate(["/clientes-cad"])
  }

  goToServicoList() {
    this.router.navigate(["/servico-list"])
  }

  onSubmit() {
    this.service
      .salvar(this.servico)
      .subscribe(
        response => {
          this.success = true
          this.errors = null
          this.servico = new Servico()
          this.goToServicoList()
          this.servicoLista.ngOnInit()
        }, errorResponse => {
          this.success = false
          this.errors = errorResponse.error.errors
        })
  }

}
