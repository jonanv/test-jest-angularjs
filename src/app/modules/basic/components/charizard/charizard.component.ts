import { Component, OnInit } from '@angular/core';

// Imports
import { first } from 'rxjs';

// Services
import { PokemonService } from '../../services/pokemon.service';

// Interfaces
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styles: ``
})
export class CharizardComponent implements OnInit {

  public pokemon!: Pokemon | null;

  private loading: boolean = false;
  private error: any;

  constructor(
    private pokemonService: PokemonService
  ) { }

  public ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(): void {
    this.pokemonService.getPokemon(6)
      .pipe(first())
      .subscribe({
        next: (response: Pokemon) => {
          this.pokemon = response;
          console.log(this.pokemon);
          this.loading = false;
        },
        error: (error: any) => {
          this.error = error.error;
          // console.log(this.error);
          this.loading = false;
        },
        complete: () => {
          // console.log('complete');
        }
      });
  }

}
