import { Component } from '@angular/core';

import { RecipeService } from '../recipe/recipe.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private recipeService: RecipeService) {
    }

    onStore() {
        console.log('clicked -> onStore...');
        this.recipeService.storeData()
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
    }

    onFetch() {
        console.log('clicked -> onFetch...');
        this.recipeService.fetchData();
    }

}
