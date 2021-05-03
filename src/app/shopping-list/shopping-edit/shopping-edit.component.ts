import { Component, ElementRef, Output, ViewChild, EventEmitter} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
    @ViewChild('nameInput', {static:true}) nameOfInput: ElementRef;
    @ViewChild('amountInput', {static:true}) amountOfInput: ElementRef;
    @Output() buttonAddClicked = new EventEmitter<Ingredients>();
    constructor () {
    
    }
    onAddInfo() {
        const ingName = this.nameOfInput.nativeElement.value;
        const ingAmount = this.amountOfInput.nativeElement.value;
        const newIngredient = new Ingredients(ingName, ingAmount);
        this.buttonAddClicked.emit(newIngredient);
    }
};