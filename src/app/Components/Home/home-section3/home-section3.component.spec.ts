import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection3Component } from './home-section3.component';

describe('HomeSection3Component', () => {
  let component: HomeSection3Component;
  let fixture: ComponentFixture<HomeSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSection3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
