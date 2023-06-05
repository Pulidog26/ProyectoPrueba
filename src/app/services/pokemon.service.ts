import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfases';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {    
  }
  
  getpokemon(){
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/ditto")
  }
}
