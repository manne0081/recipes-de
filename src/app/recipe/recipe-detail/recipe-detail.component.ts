import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

import {LogService} from '../../service/log.service';
import {DataService} from '../../service/data.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [LogService, DataService]
})

export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  value = '';
  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService, private recipeService: RecipeService, private sls: ShoppingListService) {
  }

  ngOnInit() {
    this.dataService.pushedData.subscribe(
      (data: string) => this.value = data
    );
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  onAddToList() {
    this.sls.addIngredients(this.selectedRecipe.ingredients);
    console.log('test...');
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
