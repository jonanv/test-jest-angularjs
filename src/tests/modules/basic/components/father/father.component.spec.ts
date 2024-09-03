import { ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { FatherComponent } from '../../../../../app/modules/basic/components/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

});
