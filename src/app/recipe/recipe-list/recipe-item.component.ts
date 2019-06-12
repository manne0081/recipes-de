import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
  
  @Input() recipe: Recipe;
  @Input() test: string;

  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() testOut = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeSelected.emit(this.recipe);
    this.testOut.emit(this.test);
  }
}
