import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardheaderComponent } from './admindashboardheader.component';

describe('AdmindashboardheaderComponent', () => {
  let component: AdmindashboardheaderComponent;
  let fixture: ComponentFixture<AdmindashboardheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindashboardheaderComponent]
    });
    fixture = TestBed.createComponent(AdmindashboardheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
