import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBWnv0FesHilwzSc8ujtwALEZe4iU9Pq6c",
      authDomain: "angularhttpmodule.firebaseapp.com",
    })
  }
}
