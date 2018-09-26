import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clickToEmit = new EventEmitter<{componentToShow: string}>();
  buttonClicked = '';
  constructor() { }

  ngOnInit() {
  }

  onClick(clicked: string){
    this.buttonClicked = clicked;
    this.clickToEmit.emit({componentToShow: this.buttonClicked});
  }
}
