import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkexperienceComponent } from './user-workexperience.component';

describe('UserWorkexperienceComponent', () => {
  let component: UserWorkexperienceComponent;
  let fixture: ComponentFixture<UserWorkexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWorkexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
