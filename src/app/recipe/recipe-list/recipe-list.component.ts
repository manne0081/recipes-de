import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {LogService} from '../../service/log.service';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [LogService, DataService]
})

export class RecipeListComponent implements OnInit {
  // @Output() test: string;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() testOut = 'testDatabinding';

  recipes: Recipe[] = [
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

  isDisabled: boolean = false;
  @Input() test: string;
  @Input() testIn: string;
  switch = true;
  elemente = [1,2,3,4,5];
  value = 1000;
  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    this.test = "ich raff's net...";
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

}
