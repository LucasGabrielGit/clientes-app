import { ServicoListComponent } from './servico-list/servico-list.component';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'servico-form', component: ServicoFormComponent },
  { path: 'servico-list', component: ServicoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
