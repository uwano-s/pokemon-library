import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {PokemonService} from '../pokemon.service';
// import { POKEMONS } from '../mock-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  
  pokemons: Pokemon[];
  constructor(private pokemonService: PokemonService) { }
  selectedPokemon: Pokemon;
  onSelect(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
  }
  getPokemons(): void{
   this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }
  ngOnInit() {
    this.getPokemons()
  }

}