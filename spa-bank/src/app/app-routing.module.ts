import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'cadastro', component: CadastroClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
