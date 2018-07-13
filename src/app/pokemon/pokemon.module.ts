import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SearchBarComponent } from './components';
import {
  PokemonRootComponent,
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
    PokemonRootComponent,
    SearchBarComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService,
    CharacteristicsService
  ]
})
export class PokemonModule { }
