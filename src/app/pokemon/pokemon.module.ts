import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  HeaderMainComponent,
  SearchBarComponent,
  PaginationComponent,
  PokemonListComponent,
} from './components';

import {
  PokemonSearchComponent,
  PokemonDetailComponent
} from './pages';

import {
  PokemonService,
  CharacteristicsService
} from './services';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    PokemonSearchComponent,
    SearchBarComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    PaginationComponent,
    HeaderMainComponent
  ],
  providers: [
    PokemonService,
    CharacteristicsService
  ]
})
export class PokemonModule { }
