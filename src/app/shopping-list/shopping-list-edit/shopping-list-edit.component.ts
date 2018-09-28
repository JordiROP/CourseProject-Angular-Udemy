import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputChild: ElementRef;
  @ViewChild('amountInput') amountInputChild: ElementRef;
  @Output() ingredientAdder = new EventEmitter<Ingredient>()

  constructor() { }


  ngOnInit() {
  }

  addIngredient(){
    const ingName = this.nameInputChild.nativeElement.value;
    const ingAmount = this.amountInputChild.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdder.emit(newIngredient);
  }
}
