import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  getFromRecipesList(eventData: {name: string, description: string, imagePath: string}){
    this.recipe = new Recipe(eventData.name, eventData.description,eventData.imagePath);
  }


  ngOnInit() {
  }

}
