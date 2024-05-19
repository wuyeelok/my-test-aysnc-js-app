import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChoresComponent } from './chores/chores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Testing Asynchronous JavaScript';
}
