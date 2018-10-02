import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
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
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
