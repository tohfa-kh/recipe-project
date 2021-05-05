import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() displayed= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelect(features:string) {
    this.displayed.emit(features);
  }
  // displayOneOfTwo() {
  //   this.displayed.emit()
  // }

}
