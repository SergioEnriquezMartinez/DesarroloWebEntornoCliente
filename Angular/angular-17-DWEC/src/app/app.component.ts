import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<p>Hola mundo</p>`,
  styles: `p {color: red;}`
})
export class AppComponent {
  title = 'angular-17-DWEC';
}
