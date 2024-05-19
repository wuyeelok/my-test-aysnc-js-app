import { Component } from '@angular/core';

@Component({
  selector: 'app-chores',
  standalone: true,
  imports: [],
  templateUrl: './chores.component.html',
  styleUrl: './chores.component.scss',
})
export class ChoresComponent {
  doChores() {
    console.log('Begin do chores...');
  }
}
