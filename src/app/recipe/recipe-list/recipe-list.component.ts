import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  // @Output() test: string;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() testOut = 'testDatabinding';

  recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Schnitzel mit Pommes und Salat',
      'https://i3-img.sat1.de/pis/ezone/e74eqgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXauk1M9wuU4rv5_rLEYRvbq7E9XZDDfMHZWh6xm0ZycUvSmJIa8pMomMw2PbHvnnQF82mVXhA70QNyxPJXJGIFW_TdTWqIRuDoGHN45WLi_ZGIwdhW0HJyDWk6nGOF70vKVmjeIdBu3UfytyGq2mBfMlHieNUIQDVm1d7zB2wmI-x42Csm_WUZoYaWTI40EPtnuM3ZHrWw28lAxC8Q/profile:ezone-teaser620x348',
      [
        new Ingredient('Pommes', 20),
        new Ingredient('Schnitzel', 1),
      ]
    ),
    new Recipe(
      'Salat',
      'Sommerlich fruchtig',
      'https://img.chefkoch-cdn.de/ck.de/rezepte/113/113693/1029977-960x720-himbeeressig-dressing-zu-blattsalaten-und-kaese.jpg',
      [
        new Ingredient('Salat', 40),
        new Ingredient('Himbeeren', 3),
      ]
    )
  ];

  isDisabled: boolean = false;
  @Input() test: string;
  @Input() testIn: string;
  switch = true;
  elemente = [1,2,3,4,5];
  value = 1000;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    this.test = "ich raff's net...";
  }

}
