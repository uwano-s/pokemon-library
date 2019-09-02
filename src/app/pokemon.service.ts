import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { Observable, of} from 'rxjs';
import { MessageService} from './message.service';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
getPokemons(): Observable<Pokemon[]> {
  this.messageService.add('追加しました');
  return of(POKEMONS);
}
  constructor(private messageService: MessageService) { }

}