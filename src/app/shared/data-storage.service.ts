import { Injectable } from '@angular/core';
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    let token = this.authService.getToken()
    return this.httpClient.put(
      'https://angularhttpmodule.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      { params: new HttpParams().set('auth', token)});
  }

  retrieveRecipes() {
    let token = this.authService.getToken()

    return this.httpClient.get<Recipe[]>(
      'https://angularhttpmodule.firebaseio.com/recipes.json',
      { params: new HttpParams().set('auth', token)})
      .pipe(map((recipes) => {
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
