import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfases';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit{
  public variable!: Pokemon;
  constructor(private pokemon: PokemonService){
    
  }
  ngOnInit(): void {
    this.pokemon.getpokemon().subscribe({next: (resultado: Pokemon) => {
      console.log(resultado);
      this.variable = resultado;
    }})
  }
}
