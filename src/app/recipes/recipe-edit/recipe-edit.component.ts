import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = (params['id'] != null);
        this.initForm();
      }
    );
  }

  onSubmit() {
    let ingredients: Ingredient[] = [];

    this.recipeEditForm.value.ingredients.forEach(function (ingredient) {
      ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    });

    let recipe = new Recipe(
      this.recipeEditForm.value.recipeName,
      this.recipeEditForm.value.recipeDescription,
      this.recipeEditForm.value.recipeImage,
      ingredients
    );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }

    if (!this.router.navigate(['../'])) {
      console.log("Error Navigating to recipes");
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, []),
        'amount': new FormControl(null, [])
      })
    )
  }

  onCancel() {
    if (!this.router.navigate(['../'])) {
      console.log("Error Navigating to recipes");
    }
  }

  private initForm(){
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.getName();
      recipeImage = recipe.getImagePath();
      recipeDescription = recipe.getDescription();
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.getName(), [Validators.required]),
              'amount': new FormControl(ingredient.getAmount(), [Validators.required])
            })
          );
        }
      }
    }

    this.recipeEditForm = new FormGroup({
      'recipeName': new FormControl(recipeName, [Validators.required]),
      'recipeDescription': new FormControl(recipeDescription, [Validators.required]),
      'recipeImage': new FormControl(recipeImage, [Validators.required]),
      'ingredients': recipeIngredients
    });
  }

  getRecipeImage() {
    return this.recipeEditForm.value.recipeImage;
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.recipeEditForm.get('ingredients'))['controls'];
  }
}
