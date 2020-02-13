import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

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



}
