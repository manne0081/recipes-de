import {Component, OnInit, Input} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [];
    selectedIngredient: Ingredient;

    constructor(private sls: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.sls.getIngredient();
    }

    onSelectItem(ingredient: Ingredient) {
        this.selectedIngredient = ingredient;
    }

    onCleared() {
        this.selectedIngredient = null;
    }

}
