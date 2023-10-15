import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccessfulComponent } from './loginsuccessful.component';

describe('LoginsuccessfulComponent', () => {
  let component: LoginsuccessfulComponent;
  let fixture: ComponentFixture<LoginsuccessfulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginsuccessfulComponent]
    });
    fixture = TestBed.createComponent(LoginsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
