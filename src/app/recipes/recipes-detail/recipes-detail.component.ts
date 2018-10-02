import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipesDetails: {name:  string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]};

  constructor() { }

  ngOnInit() {
  }

}
