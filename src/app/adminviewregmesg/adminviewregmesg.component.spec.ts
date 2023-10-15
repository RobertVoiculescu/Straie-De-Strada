import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewregmesgComponent } from './adminviewregmesg.component';

describe('AdminviewregmesgComponent', () => {
  let component: AdminviewregmesgComponent;
  let fixture: ComponentFixture<AdminviewregmesgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminviewregmesgComponent]
    });
    fixture = TestBed.createComponent(AdminviewregmesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
