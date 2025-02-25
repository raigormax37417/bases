import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    name: 'Goku',
    power: 10000
  }, {
    name: 'Vegeta',
    power: 9000
  }, {
    name: 'Krillin',
    power: 1000
  }];

  addCharacter( character: Character): void {
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index,1);
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
