import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Schnitzel mit Pommes und Salat',
      '../../../assets/schnitzel.jpg',
      [
        new Ingredient('Pommes', 20),
        new Ingredient('Schnitzel', 1),
      ]
    ),
    new Recipe(
      'Sommer-Salat',
      'Sommerlich fruchtig',
      '../../../assets/salatMitHimbeeren.jpg',
      [
        new Ingredient('Salat', 40),
        new Ingredient('Himbeeren', 3),
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }
}
