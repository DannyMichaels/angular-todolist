import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // make forms work

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

// this is where everything gets declared
@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, FormsModule], // modules go here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
