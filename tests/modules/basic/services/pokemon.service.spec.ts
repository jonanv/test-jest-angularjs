import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

// Services
import { PokemonService } from '../../../../src/app/modules/basic/services/pokemon.service';

// Interfaces
import { Pokemon } from '../../../../src/app/modules/basic/interfaces/pokemon.interface';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('Debe ser creado el servicio pokemon', () => {
    expect(service).toBeTruthy();
  });

  test('Debe de traer informacion de Bulbasaur', (done) => {
    service.getPokemon(1)
      .subscribe((pokemon: Pokemon) => {
        // console.log(pokemon.name);
        expect(pokemon.name)
          .toBe('bulbasaur');
        done();
      });
  });

});
