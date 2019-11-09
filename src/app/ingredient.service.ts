import { Injectable } from '@angular/core';
import {BeerType} from "./model/beer-type";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  water: number;
  sugar: number;
  yeast: number;
  hop: number;

  ingredients: Map<string, number> = new Map<string, number>();

  constructor() {
    //początkowy stan magazynu:
    this.water = 100;
    this.sugar = 100;
    this.yeast = 100;
    this.hop = 100;

    //ustawianie wartości w mapie
    this.ingredients.set('water', 100);
    this.ingredients.set('sugar', 100);
    this.ingredients.set('hop', 100);
    this.ingredients.set('yeast', 100);
    //wyciąganie wartości z mapy
    let water = this.ingredients.get('water');


    for(let ing_name of this.ingredients.keys()) {
      console.log(ing_name);
    }
  }

  /**
   * Odpowiada czy w magazynie jest dość składników na `quantity` jednostek piwa
   * typu `beerType`.
   */
  ingredientsAvailable(beerType: BeerType, quantity: number) : boolean {
    console.log(`Sprawdzam składniki na ilość ${quantity} piwa typu ${beerType.name} `);
    return quantity < 10;
  }

  /**
   * Zamawia w magazynie składniki na `quantity` (jednostek) piwa
   * typu `beerType`. Ilość składników w magazynie powinna się zmiejszyć.
   */
  ingredientsOrder(beerType: BeerType, quantity: number) {
    console.log(`Pobieram składniki na ilość ${quantity} piwa typu ${beerType.name} `);
    //odejmujemy składniki transportując je do hali piwowarczej...
    this.water -= quantity * beerType.water;  //zabieramy wodę...
    this.sugar -= quantity * beerType.sugar;
    this.yeast -= quantity * beerType.yeast;
    this.hop -= quantity * beerType.hop;
  }

  get_ingr_quantity(ing_name: string) {
    return this.ingredients[ing_name];
  }


  /**
   * Funkcja realizująca akcję dopełnienia magazynu nowymi składnikami.
   * @param ingredientName
   * @param quantity
   */
  ingredientShipmentArrival(ingredientName: string, quantity: number) {
      //todo: dodać odpowiedni składnik
    //np. ingredientName = 'water'
    this.ingredients[ingredientName] += quantity;
    if (this.ingredients[ingredientName] > 200) {
      this.ingredients[ingredientName] = 200;
    }
  }


}
