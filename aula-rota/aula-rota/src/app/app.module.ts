
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HomeComponent } from './home/home.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    HomeComponent,
    FuncionarioComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
