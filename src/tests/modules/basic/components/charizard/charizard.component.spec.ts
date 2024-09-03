import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Services
import { PokemonService } from '../../../../../app/modules/basic/services/pokemon.service';

// Components
import { CharizardComponent } from '../../../../../app/modules/basic/components/charizard/charizard.component';


describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  test('Debe crear el componente charizard', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('Debe de mostrar un loading al inicio', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading...');
  });

  test('Debe de cargar a Charizard inmediatamente', () => {
    const dummyPokemon = {
      name: 'charizardo',
      sprites: {
        front_default: 'https://charizard.com/sprite.png'
      }
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);

    fixture.detectChanges();
    // console.log(compiled.innerHTML);
    let h3 = compiled.querySelector('h3');
    let img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase())
      .toContain(dummyPokemon.name.toLowerCase());
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.alt).toBe(dummyPokemon.name);
  });

});
