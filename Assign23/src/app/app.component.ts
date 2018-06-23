import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`Marvellous Infosystems: <input type="text" size=50 name="firstname" value="Educating for better tomorrow">`,
  styles: [`input{background-color: blue;}`]
})
export class AppComponent {
  title = 'app';
}
