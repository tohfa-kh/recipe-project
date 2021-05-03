import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Chicken legs', 10),
    new Ingredients('Salad', 5),
    new Ingredients('Mushrooms', 15)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  newIngAdded(ingredientValue: Ingredients) {
    this.ingredients.push(ingredientValue);
  }

}
