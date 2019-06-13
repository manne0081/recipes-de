import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  @Output() test: string;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() testOut = 'testDatabinding';

  recipe = new Recipe('Dummy', 'Description', 'http://guides.global/images/guides/global/dummy_web_page.jpg');
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    this.test = "ich raff's net...";
  }

}
