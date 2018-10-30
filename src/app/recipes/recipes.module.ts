import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesComponent} from "./recipes.component";
import {RecipesListComponent}
from "./recipes-list/recipes-list.component";
import {RecipesDetailComponent}
from "./recipes-detail/recipes-detail.component";
import {RecipesItemComponent}
from "./recipes-list/recipes-item/recipes-item.component";
import {RecipeStartComponent}
from "./recipe-start/recipe-start.component";
import {RecipeEditComponent}
from "./recipe-edit/recipe-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipiesRoutingModule} from "./recipies-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipiesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
