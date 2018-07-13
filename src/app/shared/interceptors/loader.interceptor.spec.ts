import { TestBed, inject } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.interceptor';

describe('Loader.InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderInterceptor]
    });
  });

  it('should be created', inject([LoaderInterceptor], (service: LoaderInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
