import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { PokemonService } from 'src/app/pokemon/services/pokemon/pokemon.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { PokemonSearchComponent } from './pokemon-search.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IResponsePokemon } from 'src/app/shared/models/pokemon';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


describe('PokemonSearchComponent', () => {
  let component: PokemonSearchComponent;
  let fixture: ComponentFixture<PokemonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule.forRoot(),
        TranslateModule.forRoot({
          loader: {
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json'),
            provide: TranslateLoader,
            deps: [HttpClient]
          }
        })
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [PokemonSearchComponent],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getAll: (limit, offset) => of(<IResponsePokemon>{ count: 1, results: [ { name: 'bulbasaur' }] })
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: () => { }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //
  // Smoke tests
  //

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
