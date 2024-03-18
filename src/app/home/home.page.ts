import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  request() {
    axios
      .get('https://api.github.com/search/users?q=ionic-team')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
