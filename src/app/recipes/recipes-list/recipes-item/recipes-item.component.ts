import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() item: {name: string, description: string, imagePath: string};
  @Output() outputItem = new EventEmitter<{name: string, description: string, imagePath: string}>();
  constructor() { }

  onClickedItem(){
    this.outputItem.emit({name: this.item.name, description: this.item.description, imagePath: this.item.imagePath});
  }

  ngOnInit() {
  }

}
