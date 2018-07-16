import { TestBed, inject } from '@angular/core/testing';

import { CharacteristicsService } from './characteristics.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/shared/services/api/api.service';

describe('CharacteristicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot()
      ],
      providers: [CharacteristicsService, ApiService]
    });
  });

  it('should be created', inject([CharacteristicsService], (service: CharacteristicsService) => {
    expect(service).toBeTruthy();
  }));
});
