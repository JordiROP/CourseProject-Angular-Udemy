import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    let token = this.authService.getToken()
    return this.http.
    put('https://angularhttpmodule.firebaseio.com/recipes' +
      '.json?auth=' + token, this.recipeService.getRecipes());
  }

  retrieveRecipes() {
    let token = this.authService.getToken()

    return this.http.
    get('https://angularhttpmodule.firebaseio.com/recipes' +
      '.json?auth=' + token)
      .pipe(map(
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