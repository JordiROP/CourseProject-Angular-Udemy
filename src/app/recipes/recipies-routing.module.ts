import { NgModule } from '@angular/core';
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent}
from "./recipe-start/recipe-start.component";
import {RecipeEditComponent}
from "./recipe-edit/recipe-edit.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {RecipesDetailComponent}
from "./recipes-detail/recipes-detail.component";
import {RouterModule, Routes} from "@angular/router";

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent,
        canActivate: [AuthGuardService]},
      { path: ':id', component: RecipesDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent,
        canActivate: [AuthGuardService]}
    ] },
];

@NgModule({
  imports: [ RouterModule.forChild(recipesRoutes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService ]
})
export class RecipiesRoutingModule {}
