import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CadastroComponent } from './componentes/quadras/cadastro/cadastro.component';
import { ListagemComponent } from './componentes/quadras/listagem/listagem.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
