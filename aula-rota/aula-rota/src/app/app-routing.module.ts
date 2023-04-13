import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HomeComponent } from './home/home.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'funcionario', component: FuncionarioComponent},
  {path: 'departamento', component: DepartamentoComponent},
  {path: '**', component: PagenotfoundComponent}, // Rota de página não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
