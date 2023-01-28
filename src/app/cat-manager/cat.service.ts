import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor() { }

  sayHello() {
    alert("Hello!");
    
  }
}
