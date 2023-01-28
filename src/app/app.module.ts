import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatManagerComponent } from './cat-manager/cat-manager.component';
import { CatComponent } from './cat-manager/cat/cat.component';

@NgModule({
  declarations: [AppComponent, CatManagerComponent, CatComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
