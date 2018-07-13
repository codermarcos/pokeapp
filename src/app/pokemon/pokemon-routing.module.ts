import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonRootComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: PokemonRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
