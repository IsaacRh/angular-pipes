import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Mr. Robot';
  array = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  percentage:number = 0.235;
  salary: number = 1234.5;

  hero = {
    name: 'Logan',
    key: 'Wolwerine',
    age: 89,
    address: {
      street: 'first',
      number: 13
    }
  }
}
