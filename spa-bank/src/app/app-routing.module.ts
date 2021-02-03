import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ContentComponent } from './content/content.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'cadastro', component: CadastroClientesComponent},
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent},
  { path: 'home-logada', component: HomeLogadaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
