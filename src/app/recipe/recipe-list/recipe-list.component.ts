import {Component, OnInit, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

import {LogService} from '../../service/log.service';
import {Recipe} from '../recipe.model';
import {DataService} from '../../service/data.service';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
    providers: [LogService, DataService]
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    // Nur zu Testzwecken...
    isDisabled = false;
    @Output() testOut = 'testDatabinding';
    @Input() test: string;
    @Input() testIn: string;
    switch = true;
    elements = [1, 2, 3, 4, 5];
    value = 1000;
    items: string[] = [];

    constructor(private logService: LogService,
                private dataService: DataService,
                private recipeService: RecipeService,
                private router: Router) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
    this.router.navigate(['/rezepte', 'neu']);
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
