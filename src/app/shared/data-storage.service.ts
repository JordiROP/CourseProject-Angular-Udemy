import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angularhttpmodule.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  retrieveRecipes() {
    return this.http.get('https://angularhttpmodule.firebaseio.com/recipes.json').pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    )
  }
}
