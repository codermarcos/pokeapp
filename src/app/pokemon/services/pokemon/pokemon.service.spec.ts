import { TestBed, inject } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';

import { PokemonService } from './pokemon.service';
import { ApiService } from '../../../shared/services';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot()
      ],
      providers: [PokemonService, ApiService]
    });
  });

  it('should be created', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
