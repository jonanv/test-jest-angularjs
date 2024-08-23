import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../../../src/app/modules/basic/components/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  test('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  test('Debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('Debe de incrementar basado en el argumento (5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(5);
  });

  test('Debe de incrementar y decrementar en 1 al presionar los botones', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(1);

    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(-1);
  });

  test('Cambiar el counter debe de actualizar la etiqueta h1', () => {
    component.increaseBy(10);
    fixture.detectChanges();

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('10');
  });

});
