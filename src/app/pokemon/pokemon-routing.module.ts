import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PokemonSearchComponent,
  PokemonDetailComponent
} from './pages';

const routes: Routes = [
  {
    path: 'search',
    component: PokemonSearchComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
