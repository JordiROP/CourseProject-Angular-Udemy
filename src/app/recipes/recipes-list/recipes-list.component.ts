import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A', 'A Desc', 'https://www.maxpixel.net/static/photo/1x/' +
      'Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
