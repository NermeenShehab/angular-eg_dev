import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection6Component } from './home-section6.component';

describe('HomeSection6Component', () => {
  let component: HomeSection6Component;
  let fixture: ComponentFixture<HomeSection6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSection6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
