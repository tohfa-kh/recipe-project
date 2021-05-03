import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
    new Recipe('The first recipe', "It's so delicious, you have to try it", 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
    new Recipe('The second recipe', "It's more classy" , 'https://embed.widencdn.net/img/beef/tpfhvjvdnh/640x360px/rancher-recipe-summertime-beef-meatloaf-horizontal.tif?keep=c&u=nvwl20')
  ];
  @Output() sendTheItemInfo = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() : void {
  }

  onSelectRecipeItem(recipe:Recipe) {
    this.sendTheItemInfo.emit(recipe);
  }

}
