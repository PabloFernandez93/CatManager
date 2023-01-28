import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent {

  @Input()
  name?: string;

  @Input()
  age?: number;

  @Output()
  fed: EventEmitter<string> = new EventEmitter<string>();

  feed(): void {
    //alert("Ich wurde gefüttert");
    if (this.name == null) {
      this.fed.emit('Namenlose Katze');
    } else {
      this.fed.emit(this.name);
    }
  }
}
