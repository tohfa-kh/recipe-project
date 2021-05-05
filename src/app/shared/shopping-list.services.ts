import {Ingredients} from '../shared/ingredient.model'
export class ShoppingListServices {
    private ingredients: Ingredients[] = [
        new Ingredients('Chicken legs', 10),
        new Ingredients('Salad', 5),
        new Ingredients('Mushrooms', 15)
      ]
    selectThisIngredient() {
      return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredients) {
      this.ingredients.push(ingredient)
    }
}