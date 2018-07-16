import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonService } from 'src/app/pokemon/services/pokemon/pokemon.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/shared/services';

import { PokemonSearchComponent } from './pokemon-search.component';
import { TranslateLoaderModule } from 'src/app/shared/translate/translate-loader.module';

describe('PokemonSearchComponent', () => {
  let component: PokemonSearchComponent;
  let fixture: ComponentFixture<PokemonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateLoaderModule,
        SharedModule.forRoot()
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [PokemonSearchComponent],
      providers: [
        PokemonService,
        ApiService,
        {
          provide: Router,
          useValue: {
            navigate: () => {}
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
