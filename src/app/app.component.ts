import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label>Введите имя:</label>
  <input placeholder="name">
  <h1>Добро пожаловать {{name}}!</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  name= '';
}
