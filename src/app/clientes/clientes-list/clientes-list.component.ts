import { ClientesService } from './../../clientes.service';
import { Cliente } from './../clientes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = []
  clienteSelecionado: Cliente

  msgSucesso: string
  msgErro: string

  nomeCliente: string

  constructor(private service: ClientesService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.service.getClientes()
      .subscribe(response => {
        this.clientes = response;
      })
  }

  novoCadastro() {
    this.router.navigate(["/clientes-cad"])
  }

  preparaExclusao(cliente: Cliente) {
    this.clienteSelecionado = cliente
  }

  deletaCliente() {
    this.service
      .delete(this.clienteSelecionado)
      .subscribe(
        resp => {
          this.msgSucesso = 'Cliente excluído com sucesso!'
          this.ngOnInit()
        },
        erro => this.msgErro = 'Não foi possível excluir o cliente!'
      )
  }
}
