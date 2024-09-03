import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Components
import { FatherComponent } from '../../../../../app/modules/basic/components/father/father.component';
import { FatherSonComponent } from '../../../../../app/modules/basic/components/father-son/father-son.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  test('Debe ser creado el componente', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('Debe de hacer match con el snapshot si hay cliente', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    expect(compiled).toMatchSnapshot();
  });

  test('Debe de establer el nombre del cliente', () => {
    component.onSetClient('Juan');
    fixture.detectChanges();

    let divCode = compiled.querySelector('.mt-2');
    expect(divCode?.textContent).toContain("name");
    expect(divCode?.textContent).toContain("Juan");
  });

  test('Debe de borrar el cliente si se emite onDeleteClient (hijo)', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;
    // console.log(sonComponent.client);
    sonComponent.onDeleteClientEmitter.emit();
    expect(component.client).toBeUndefined();
  });

  test('Debe de actualizar el cliente onUpdateCliente', () => {
    component.client = { id: 1, name: 'Pedro' };
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;
    // console.log(sonComponent.client);
    sonComponent.onUpdateClientEmitter.emit({ id: 2, name: 'Pedro' });
    expect(component.client).toEqual({ id: 2, name: 'Pedro' });

    let divCode = compiled.querySelector('.mt-2');
    expect(divCode?.textContent).toContain("name");
    expect(divCode?.textContent).toContain("Pedro");
  });

});
