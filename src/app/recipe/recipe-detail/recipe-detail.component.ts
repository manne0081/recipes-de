import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import { Recipe } from '../recipe.model';

import { LogService } from '../../service/log.service';
import { RecipeService } from '../recipe.service';
import { DataService } from '../../service/data.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
    providers: [LogService, DataService]
})

export class RecipeDetailComponent implements OnInit, OnDestroy {
    selectedRecipe: Recipe;
    recipeId: number;

    private subcription: Subscription;

    value = '';
    items: string[] = [];

    constructor(private logService: LogService,
                private dataService: DataService,
                private recipeService: RecipeService,
                private sls: ShoppingListService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.dataService.pushedData.subscribe(
            (data: string) => this.value = data
        );
        this.subcription = this.activatedRoute.params.subscribe(
            params => {
                this.recipeId = +params['id'];
                this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
            }
        );
    }

    ngOnDestroy() {
        this.subcription.unsubscribe();
    }

    onEdit() {
        this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']);
    }

    onAddToList() {
        this.sls.addIngredients(this.selectedRecipe.ingredients);
    }

    onDelete() {
        this.router.navigate(['/rezepte']);
        this.recipeService.deleteRecipe(this.recipeId);
    }

    onLog(value: string) {
        this.logService.log(value);
    }

    onStore(value: string) {
        this.dataService.addData(value);
    }

    onGet() {
        this.items = this.dataService.getData();
    }

    onSend(value: string) {
        console.log(value);
        this.dataService.pushData(value);
    }

}
