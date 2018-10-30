import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    if (this.isAuthenticated()) {
      this.recipeService.addIngredientsToShoppingList(
        this.recipe.ingredients);
    }
  }

  onEditRecipe(){
    this.router.navigate(['edit'],
      {relativeTo: this.route})
  }

  onDeleteRecipe(){
    if (this.isAuthenticated()) {
      this.recipeService.deleteRecipe(this.id);
      if (!this.router.navigate(['recipes'])) {
        console.log('Error Navigating to recipes');
      }
    }
  }

  private isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
