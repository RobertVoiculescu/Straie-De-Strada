import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbeforelogComponent } from './headerbeforelog.component';

describe('HeaderbeforelogComponent', () => {
  let component: HeaderbeforelogComponent;
  let fixture: ComponentFixture<HeaderbeforelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderbeforelogComponent]
    });
    fixture = TestBed.createComponent(HeaderbeforelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
