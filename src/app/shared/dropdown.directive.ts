import { Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective {
   @HostBinding('class.open') isActive= false;
   @HostListener('click') onClick() {
        this.isActive= !this.isActive; 
   }
}