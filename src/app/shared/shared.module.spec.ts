import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let sharedModule: SharedModule;

  beforeEach(() => {
    sharedModule = new SharedModule();
  });

  /**
   *
   * Smooke tests
   *
   */
  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
  it('should have forRoot', () => {
    expect(typeof SharedModule.forRoot).toMatch('function');
  });
});
