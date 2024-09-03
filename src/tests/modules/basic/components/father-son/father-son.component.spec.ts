import { ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { FatherSonComponent } from '../../../../../app/modules/basic/components/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    jest.clearAllMocks();
  });

  test('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('No deben aparecer botones si no hay cliente', () => {
    let buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('Deben de aparecer 2 botones si hay cliente', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    let buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('Deben de match con el snapshot si hay cliente', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot();
  });

  test('Debe de emitir onDeleteClientEmitter con el boton de "Borrar cliente"', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClientEmitter, 'emit');
    let btnOnDeleteClient = compiled.querySelector('[data-test="btn-delete-client"]');
    // console.log(btnOnDeleteClient?.innerHTML);
    btnOnDeleteClient?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClientEmitter.emit).toHaveBeenCalled();
  });

  test('Debe de emitir onUpdateClientEmiiter con el boton de "Cambiar id"', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onUpdateClientEmitter, 'emit');
    let btnOnUpdateClient = compiled.querySelector('[data-test="btn-update-client"]');
    // console.log(btnOnUpdateClient?.innerHTML);
    btnOnUpdateClient?.dispatchEvent(new Event('click'));

    expect(component.onUpdateClientEmitter.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'Juan'
    });
  });

  test('Debe de emitir el onUpdateCliente con el ID especificado si hay un cliente', () => {
    jest.spyOn(component.onUpdateClientEmitter, 'emit');

    // Cuando el cliente NO existe
    component.onUpdateClient(10);
    expect(component.onUpdateClientEmitter.emit).not.toHaveBeenCalled();

    // Cuando el cliente existe
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();
    component.onUpdateClient(10);

    expect(component.onUpdateClientEmitter.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Juan'
    });
  });

});
