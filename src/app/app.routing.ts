import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rezepte', loadChildren: './recipe/recipe.module#RecipeModule' },
    { path: 'einkaufsliste', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
