import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() outputItem = new EventEmitter<{name: string, description: string, imagePath: string}>();

  recipes: Recipe[] = [
    new Recipe('A', 'A Desc', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('B', 'B Desc', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  onOutputItem(eventData: {name: string, description: string, imagePath: string}){
    this.outputItem.emit({name: eventData.name, description: eventData.description, imagePath: eventData.imagePath});
  }

  constructor() { }

  ngOnInit() {
  }

}
