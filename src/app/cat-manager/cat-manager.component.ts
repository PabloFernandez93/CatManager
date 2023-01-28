import { Component } from '@angular/core';
import {Cat} from "./cat.model";
import { CatService } from './cat.service';

@Component({
  selector: 'app-cat-manager',
  templateUrl: './cat-manager.component.html',
  styleUrls: ['./cat-manager.component.css']
})
export class CatManagerComponent {

  private catservice: CatService;

  constructor(catservice: CatService) { 
    this.catservice = catservice;
  }

cats: Cat[] = [
    {name: "Mauzi", age: 20},
    {name: "Sui", age: 2},
    {name: "Peti", age: 5},
    {name: "Lauri", age: 90},
    ];
    
    wasFed(name: string): void {
      alert(`${name} wurde gefüttert`)
    }

    registerCat(name: string, age: number) {
      const newCat: Cat = {name: name, age: age};
      this.cats.push(newCat);
      this.catservice.sayHello();
    }
}
