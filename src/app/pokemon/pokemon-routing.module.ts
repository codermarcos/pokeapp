import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PokemonRootComponent,
  PokemonDetailComponent
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: PokemonRootComponent
  },
  {
    path: 'search/:id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
