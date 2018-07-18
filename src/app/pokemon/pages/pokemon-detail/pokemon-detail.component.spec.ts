import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


import { PokemonService, CharacteristicsService } from 'src/app/pokemon/services';
import { ICharacteristic } from 'src/app/shared/models/characteristics';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { IPokemon } from 'src/app/shared/models/pokemon';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        SharedModule.forRoot(),
        TranslateModule.forRoot({
          loader: {
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json'),
            provide: TranslateLoader,
            deps: [HttpClient]
          }
        })
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
