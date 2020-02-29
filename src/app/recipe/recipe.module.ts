import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { recipeRouting } from './recipe.routing';
import { MultiplyPipe } from './recipe-start/multiply.pipe';
import { FilterPipe } from './recipe-start/filter.pipe';

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        MultiplyPipe,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        recipeRouting,
    ],
    providers: [
    ]
})

export class RecipeModule {}
