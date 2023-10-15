import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewregComponent } from './adminviewreg.component';

describe('AdminviewregComponent', () => {
  let component: AdminviewregComponent;
  let fixture: ComponentFixture<AdminviewregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminviewregComponent]
    });
    fixture = TestBed.createComponent(AdminviewregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
