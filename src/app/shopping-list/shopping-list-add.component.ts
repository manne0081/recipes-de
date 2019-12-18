import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onClickReset(): void {
    this.sls.resetIngredients();
  }

}
