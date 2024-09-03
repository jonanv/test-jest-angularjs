import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { CounterRouteComponent } from '../../../../../app/modules/basic/components/counter-route/counter-route.component';
import { ActivatedRoute } from '@angular/router';


describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;
  let compiled: HTMLElement;

  test('Debe de tener el valor inicial en cero', async() => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    expect(component.counter).toBe(0);
  });

  test('Debe de tener el valor 100 en la ruta /counter/100', async() => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return (param === 'initial') ? '100' : undefined;
          }
        }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{
        provide: ActivatedRoute, useValue: mockActivatedRoute
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    expect(component.counter).toBe(100);
  });

  test('Debe de tener el valor 10 en la ruta /counter/20abc', async() => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return (param === 'initial') ? '20abc' : undefined;
          }
        }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{
        provide: ActivatedRoute, useValue: mockActivatedRoute
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    expect(component.counter).toBe(10);
  });

});
