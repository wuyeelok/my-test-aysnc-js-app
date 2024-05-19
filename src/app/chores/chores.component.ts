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

    // Callback hell
    this.closeWindow(() => {
      this.turnOnAC(() => {
        this.turnOnHeater(() => {
          this.turnOnWashingMachine(() => console.log('Finish all chores!!!'));
        });
      });
    });
  }

  closeWindow(callBack: CallableFunction) {
    setTimeout(() => {
      console.log('Window is closed!');
      callBack();
    }, 3000);
  }

  turnOnAC(callBack: CallableFunction) {
    setTimeout(() => {
      console.log('AC is ON!');
      callBack();
    }, 1000);
  }

  turnOnHeater(callBack: CallableFunction) {
    setTimeout(() => {
      console.log('heater is turn on!');
      callBack();
    }, 1500);
  }

  turnOnWashingMachine(callBack: CallableFunction) {
    setTimeout(() => {
      console.log('Washing Machine is on!');
      callBack();
    }, 2500);
  }
}
