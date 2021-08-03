import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection4Component } from './home-section4.component';

describe('HomeSection4Component', () => {
  let component: HomeSection4Component;
  let fixture: ComponentFixture<HomeSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSection4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
