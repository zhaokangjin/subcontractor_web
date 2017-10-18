import { TestBed, inject } from '@angular/core/testing';

import { UserEducationService } from './user-education.service';

describe('UserEducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEducationService]
    });
  });

  it('should be created', inject([UserEducationService], (service: UserEducationService) => {
    expect(service).toBeTruthy();
  }));
});
