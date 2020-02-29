import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import { HttpErrorHandler } from '../http-error-handler.service';
import { map } from 'rxjs/internal/operators';

@Injectable()
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
    private apiUrl = 'https://recipesdb-d2d60.firebaseio.com/recipe.json';
    recipeChanged = new EventEmitter<Recipe[]>();

    constructor(private httpClient: HttpClient,
                private httpErrorHandler: HttpErrorHandler) {}

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        console.log(recipe.imagePath);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData() {
        const body = JSON.stringify(this.recipes);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put(this.apiUrl, body, {headers: headers});
    }

    fetchData() {
        this.httpClient.get(this.apiUrl)
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipes = recipes;
                    this.recipeChanged.emit(this.recipes);
                }
            );
    }

}
