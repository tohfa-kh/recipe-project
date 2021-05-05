import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListServices } from '../shared/shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private shListServices: ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients= this.shListServices.selectThisIngredient();
  }
}
