import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentToShow: string = 'Recipes';

  getEmitedClick(eventData: {componentToShow: string}) {
    this.componentToShow = eventData.componentToShow;
    console.log(this.componentToShow);
  }

  isRecipes() {
    return this.componentToShow === "Recipes";
  }
}
