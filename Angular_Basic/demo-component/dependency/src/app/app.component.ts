import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dependency';
}
