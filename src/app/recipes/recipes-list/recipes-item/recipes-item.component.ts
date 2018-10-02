import { Component, Input, OnInit } from '@angular/core';
import {RecipeService} from "../../recipe.service";
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() item: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onClickedItem(){
    this.recipeService.recipeSelected.emit(this.item);
  }

}
