import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  shoppingListEditForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editIdItem: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit() {
    this.subscription  = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editIdItem = id;
        this.editItem = this.shoppingListService.getIngredient(id);
        this.shoppingListEditForm.setValue({
          'shopping_list_edit_form_name': this.editItem.getName(),
          'shopping_list_edit_form_amount': this.editItem.getAmount().toString()
        });
      }
    );
    this.shoppingListEditForm = new FormGroup({
      'shopping_list_edit_form_name': new FormControl(null, [Validators.required]),
      'shopping_list_edit_form_amount': new FormControl(null, [Validators.required])
    });
  }

  formIsValid() {
    return this.shoppingListEditForm.valid;
  }
  onSubmit() {
    const ingName = this.shoppingListEditForm.value.shopping_list_edit_form_name;

    const ingAmount = this.shoppingListEditForm.value.shopping_list_edit_form_amount;

    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIdItem, newIngredient);
    } else {
      this.shoppingListService.pushIngredient(newIngredient);
    }
    this.resetForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editIdItem);
    this.resetForm();
  }

  onClear() {
    this.resetForm();
  }

  resetForm() {
    this.shoppingListEditForm.reset();
    this.editMode = false;
  }
}
