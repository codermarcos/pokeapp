import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { PokemonService } from 'src/app/pokemon/services/pokemon.service';
import { ApiService } from 'src/app/shared/services';

import { PokemonRootComponent } from './pokemon-root.component';

describe('RootComponent', () => {
  let component: PokemonRootComponent;
  let fixture: ComponentFixture<PokemonRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot()
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
