import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from "./recipe.model";
import {RecipesComponent} from "./recipes.component";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: RecipesComponent
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A',
      'A Desc',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('B',
      'B Desc',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
