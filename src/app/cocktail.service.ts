import { Injectable } from '@angular/core';
import { Cocktail} from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
 private cocktails= [
  new Cocktail('Ptipunch','10 balles','photo'),
  new Cocktail('Menthe à l eau','3 balles','photo'),

   
 ]
  constructor() { }
  getCocktails(): any[] {
    return this.cocktails;
  }
}
