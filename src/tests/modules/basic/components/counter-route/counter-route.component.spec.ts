import { ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CounterRouteComponent } from '../../../../../app/modules/basic/components/counter-route/counter-route.component';


describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  test('Debe de crear el componente', () => {
    expect(component).toBeTruthy();
  });

});
