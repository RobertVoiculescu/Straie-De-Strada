import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelogComponent } from './homelog.component';

describe('HomelogComponent', () => {
  let component: HomelogComponent;
  let fixture: ComponentFixture<HomelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomelogComponent]
    });
    fixture = TestBed.createComponent(HomelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
