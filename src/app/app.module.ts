import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add/shopping-list-add.component';
import { HighlightDirective } from './recipe/recipe-list/highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './header/dropdown.directive';
import { DataService } from './service/data.service';
import { LogService } from './service/log.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from './app.routing';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';
import { MultiplyPipe } from './recipe/recipe-start/multiply.pipe';
import { FilterPipe } from './recipe/recipe-start/filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipeComponent,
        ShoppingListComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        ShoppingListAddComponent,
        HighlightDirective,
        UnlessDirective,
        DropdownDirective,
        RecipeStartComponent,
        RecipeEditComponent,
        MultiplyPipe,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
    ],
    providers: [LogService,
                DataService,
                ShoppingListService,
                RecipeService,
                HttpErrorHandler,
                MessageService,
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
