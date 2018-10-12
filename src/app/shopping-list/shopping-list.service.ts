import { Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  pushIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for(let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
