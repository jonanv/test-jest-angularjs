import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Imports
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';

// Interfaces
import { Pokemon } from '../interfaces/pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = environment.apiUrl;
  private apiVersion: string = environment.apiVersion;
  private url: string = `${ this.apiUrl }${ this.apiVersion }`;

  constructor(
    private http: HttpClient
  ) { }

  public getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + `${ id }`)
      .pipe(map((response: Pokemon) => {
        return response;
      }));
  }
}
