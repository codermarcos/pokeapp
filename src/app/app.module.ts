import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TranslateLoaderModule } from './shared/translate/translate-loader.module';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule,
    TranslateLoaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
