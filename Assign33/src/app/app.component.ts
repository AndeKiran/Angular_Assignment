import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  /**
   * name
   */
  public fun():String {
    var name:string="Inside Fun Function";
   return name;
  }
}
