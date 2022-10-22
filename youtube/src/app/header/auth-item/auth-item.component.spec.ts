import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthItemComponent } from './auth-item.component';

describe('AuthItemComponent', () => {
  let component: AuthItemComponent;
  let fixture: ComponentFixture<AuthItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
