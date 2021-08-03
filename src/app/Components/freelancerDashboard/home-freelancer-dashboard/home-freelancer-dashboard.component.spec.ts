import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFreelancerDashboardComponent } from './home-freelancer-dashboard.component';

describe('HomeFreelancerDashboardComponent', () => {
  let component: HomeFreelancerDashboardComponent;
  let fixture: ComponentFixture<HomeFreelancerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFreelancerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFreelancerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
