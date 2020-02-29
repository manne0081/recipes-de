import { NgModule } from '@angular/core';

import {ShoppingListAddComponent} from './shopping-list-add/shopping-list-add.component';
import {ShoppingListComponent} from './shopping-list.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { shoppingListRouting } from './shopping-list.routing';

@NgModule({
    declarations: [
        ShoppingListAddComponent,
        ShoppingListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        shoppingListRouting,
    ],
    providers: [
    ]
})

export class ShoppingListModule { }
