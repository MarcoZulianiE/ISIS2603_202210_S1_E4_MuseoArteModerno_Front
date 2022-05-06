import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'museums-front';
  categoria_mostrada = 'museo';

  onSelected(elemento: string): void {
    this.categoria_mostrada = elemento;
  }
}
