import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-add',
    templateUrl: './shopping-list-add.component.html',
    styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
    @Input() selectedIngredient: Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;

    constructor(private sls: ShoppingListService) {
    }

    ngOnInit() {
    }

    onClickReset(): void {
        this.sls.resetIngredients();
    }

    onSubmit(form: NgForm) {
        const newIngredient = new Ingredient(form.value.name, form.value.amount);
        if (!this.isAdd) {
            // Bearbeiten
            this.sls.editIngredient(this.selectedIngredient, newIngredient);
        } else {
            // Neu
            this.sls.addIngredient(newIngredient);
        }
        this.onClear(form);
    }


    ngOnChanges(changes) {
        if (changes.selectedIngredient.currentValue == null) {
            this.selectedIngredient = {name: null, amount: null};
            this.isAdd = true;
        } else {
            this.isAdd = false;
        }
    }

    onClear(form: NgForm) {
        this.cleared.emit();
        form.resetForm();
    }

    onDelete(form: NgForm) {
        this.sls.deleteIngredient(this.selectedIngredient);
        this.onClear(form);
    }

}
