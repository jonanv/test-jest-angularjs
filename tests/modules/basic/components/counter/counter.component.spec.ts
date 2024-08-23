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
    expect(component)
      .toBeTruthy();
  });

  test('Debe hacer match con el snapshot', () => {
    expect(compiled)
      .toMatchSnapshot();
  });
});
