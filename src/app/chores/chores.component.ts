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

    this.closeWindow();
    this.turnOnAC();
    this.turnOnHeater();
    this.turnOnWashingMachine();

    console.log('Finish all chores!!!');
  }

  closeWindow() {
    setTimeout(() => {
      console.log('Window is closed!');
    }, 3000);
  }

  turnOnAC() {
    setTimeout(() => {
      console.log('AC is ON!');
    }, 1000);
  }

  turnOnHeater() {
    setTimeout(() => {
      console.log('heater is turn on!');
    }, 1500);
  }

  turnOnWashingMachine() {
    setTimeout(() => {
      console.log('Washing Machine is on!');
    }, 2500);
  }
}
