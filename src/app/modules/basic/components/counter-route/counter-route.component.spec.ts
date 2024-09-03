import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from './counter-route.component';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
