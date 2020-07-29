import { Router } from '@angular/router';
import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoBusca } from './servicoBusca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css'],
})
export class ServicoListComponent implements OnInit {
  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoBusca[] = [];
  constructor(private service: ServicoPrestadoService, private router: Router) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
    this.service.buscarTodos().subscribe((resp) => (this.lista = resp));
  }

  consultar() {
    this.service
      .buscar(this.nome, this.mes)
      .subscribe((response) => (this.lista = response));
  }

  novoServico() {
    this.router.navigate(['/servico-form']);
  }
}
