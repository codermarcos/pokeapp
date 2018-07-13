import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';

import { PokemonService } from '../../services/pokemon/pokemon.service';
import { ApiService } from '../../../shared/services';

import { PokemonRootComponent } from './pokemon-root.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RootComponent', () => {
  let component: PokemonRootComponent;
  let fixture: ComponentFixture<PokemonRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot()
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ PokemonRootComponent ],
      providers: [PokemonService, ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
