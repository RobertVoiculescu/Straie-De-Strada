import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddproductsComponent } from './adminaddproducts.component';

describe('AdminaddproductsComponent', () => {
  let component: AdminaddproductsComponent;
  let fixture: ComponentFixture<AdminaddproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminaddproductsComponent]
    });
    fixture = TestBed.createComponent(AdminaddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
