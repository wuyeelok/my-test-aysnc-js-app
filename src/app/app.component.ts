import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChoresComponent } from './chores/chores.component';
import { ChoreService } from './chore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.choreService.myPubisher.subscribe({
      next: (msg: string) => {
        this.title = msg;
      },
    });
  }
  title = 'Testing Asynchronous JavaScript';

  constructor(private choreService: ChoreService) {}
}
