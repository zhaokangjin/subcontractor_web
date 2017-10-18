import { TestBed, inject } from '@angular/core/testing';

import { UserWorkexperienceService } from './user-workexperience.service';

describe('UserWorkexperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserWorkexperienceService]
    });
  });

  it('should be created', inject([UserWorkexperienceService], (service: UserWorkexperienceService) => {
    expect(service).toBeTruthy();
  }));
});
