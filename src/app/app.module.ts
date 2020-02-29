import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './recipe/recipe-list/highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DataService } from './service/data.service';
import { LogService } from './service/log.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from './app.routing';
import { RecipeService } from './recipe/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core.module';

// Main-Module for the whole App
@NgModule({
    declarations: [
        // Alle Components / Directives / Pipes
        AppComponent,
        HeaderComponent,
        HighlightDirective,
        UnlessDirective,
    ],
    imports: [
        // Alle anderen Module
        BrowserModule,
        routing,
        HttpClientModule, // import HttpClientModule after BrowserModule.
        ShoppingListModule,
        CoreModule,
    ],
    providers: [
        // Alle Serivces die APP weit verfügbar sein müssen
        LogService,
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
