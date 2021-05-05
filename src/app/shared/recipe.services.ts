import {EventEmitter} from '@angular/core'
import { Recipe } from '../recipe-book/recipe-list/recipe.model'


export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('The first recipe', "It's so delicious, you have to try it", 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
        new Recipe('The second recipe', "It's more classy" , 'https://embed.widencdn.net/img/beef/tpfhvjvdnh/640x360px/rancher-recipe-summertime-beef-meatloaf-horizontal.tif?keep=c&u=nvwl20')
    ]
    getRecipe() {
        return this.recipes.slice();
    }
    }



    // with the private and .slice we made original "recipes" unaccessible from outside, but it copy. It will give the copy