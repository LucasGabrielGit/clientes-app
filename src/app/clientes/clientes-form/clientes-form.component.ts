import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Cliente } from '../clientes'

import { ClientesService } from '../../clientes.service'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[]
  id: number

  constructor(private service: ClientesService,
    private router: Router,
    private actRoute: ActivatedRoute) {
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
    let params = this.actRoute.params

    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if (this.id) {
        this.service
          .getClienteById(this.id)
          .subscribe(resp => {
            this.cliente = resp
            errorResp => this.cliente = new Cliente()
          })
      }
    })
  }

  onSubmit() {
    if (this.id) {
      this.service
        .atualizar(this.cliente)
        .subscribe(resp => {
          this.success = true
          this.errors = null
        },
          errorResp => {
            ["Erro ao atualizar o cliente"]
          })
    } else {
      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true
          this.errors = []
          this.cliente = response
        },
          errorResponse => {
            this.success = false
            this.errors = errorResponse.error.errors;
          })
    }
  }

  voltar() {
    this.router.navigate(['/clientes-list'])
  }

}
