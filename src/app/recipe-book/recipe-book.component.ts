import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.services';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedInfo:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=> {
      this.selectedInfo= recipe;
    })
  }
  
}
