import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

// this is where everything gets declared
@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule], // modules go here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
