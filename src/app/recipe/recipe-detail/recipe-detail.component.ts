import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {LogService} from '../../service/log.service';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [LogService, DataService]
})

export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Input() test: string;

  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService) {
  }

  ngOnInit() {
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
