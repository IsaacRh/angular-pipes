import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name      :string = 'Mr. Robot';
  name2     :string = 'iSaac rOjAs HeRnAnDeZ';
  array     = [1,2,3,4,5,6,7,8,9,10];
  PI        :number = Math.PI;
  percentage:number = 0.235;
  salary    : number = 1234.5;

  date      : Date = new Date();
  enable    : boolean = true;
  language  : string = 'es';
  urlVideo  : string = 'https://www.youtube.com/embed/hT4EDc-8024';

  valPromise = new Promise<string>((resolve) => {
    setTimeout(() =>{
      resolve("data...");
    }, 4500);
  });

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
