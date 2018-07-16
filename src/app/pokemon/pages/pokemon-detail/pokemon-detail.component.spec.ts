import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { TranslateLoaderModule } from 'src/app/shared/translate/translate-loader.module';
import { PokemonService, CharacteristicsService } from 'src/app/pokemon/services';
import { IPokemon } from 'src/app/shared/models/pokemon';
import { ICharacteristic } from '../../../shared/models/characteristics';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        TranslateLoaderModule,
        SharedModule.forRoot()
      ],
      declarations: [PokemonDetailComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: (callback) => callback({
                get: () => 1
              })
            }
          }
        },
        {
          provide: PokemonService,
          useValue: {
            getOne: (id) => of(<IPokemon>{ id: 1 })
          }
        },
        {
          provide: CharacteristicsService,
          useValue: {
            getCharacteristic: (id) => of(<ICharacteristic>{  })
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
