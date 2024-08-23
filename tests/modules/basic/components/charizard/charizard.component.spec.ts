import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from '../../../../../src/app/modules/basic/components/charizard/charizard.component';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('Debe crear el componente charizard', () => {
    expect(component).toBeTruthy();
  });

});
