import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent }
from "./shopping-list-edit/shopping-list-edit.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({

  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ShoppingListModule { }
