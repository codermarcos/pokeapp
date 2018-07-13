import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SearchBarComponent } from './components';
import { PokemonRootComponent } from './pages';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';

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
  ]
})
export class PokemonModule { }
