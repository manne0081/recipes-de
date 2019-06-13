import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  @Output() testString = new EventEmitter<string>();

  onClick() {
    this.title = 'Title...'
    this.testString.emit('testString...');
  }

}
