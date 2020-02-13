import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    recipeForm: FormGroup;
    private recipeIndex: number;
    private subscription: Subscription;
    private isNew = true;
    private recipe: Recipe;

    constructor(private recipeService: RecipeService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            params => {
                if (params.hasOwnProperty('id')) {
                    this.isNew = false;
                    this.recipeIndex = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.recipeIndex);
                    console.log(this.recipe);
                } else {
                    this.isNew = true;
                    this.recipe = null;
                }
            }
        )

        let recipeName = null;
        let recipeImagePath = null;
        let recipeDescription = null;
        let recipeIngredients = new FormArray([]);

        if (!this.isNew) {
            if (this.recipe.hasOwnProperty('ingredients')) {
                for (let ingredient of this.recipe.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, Validators.required)
                        })
                    )
                }
            }
            recipeName = this.recipe.name;
            recipeImagePath = this.recipe.imagePath;
            recipeDescription = this.recipe.description;
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': recipeIngredients
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit(){
        const newRecipe = this.recipeForm.value;
        if (this.isNew) {
            this.recipeService.addRecipe(newRecipe);
        } else {
            this.recipeService.editRecipe(this.recipe, newRecipe);
        }
        this.onNavigateBack();
    }

    onCancel() {
        this.onNavigateBack();
    }

    onNavigateBack() {
        this.router.navigate(['/'])
    }

    onAddIngredientControl(name: string, amount: string) {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(name, Validators.required),
                'amount': new FormControl(amount, Validators.required),
            })
        );
    }

    onRemoveIngredientControl(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

}
