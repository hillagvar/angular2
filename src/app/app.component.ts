import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrikampisComponent } from './trikampis/trikampis.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrikampisComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular2';
}
