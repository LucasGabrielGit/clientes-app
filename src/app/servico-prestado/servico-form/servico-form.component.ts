import { Servico } from './../servico';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/clientes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  clientes: Cliente[]
  servico: Servico

  constructor(private clientesService: ClientesService) {
    this.servico = new Servico()
  }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe(response => {
        this.clientes = response
      })
  }

  onSubmit() {
    console.log(this.servico)
  }

}
