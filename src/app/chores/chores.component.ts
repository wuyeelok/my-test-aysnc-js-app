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

    /*
    // Callback hell
    this.closeWindow(() => {
      this.turnOnAC(() => {
        this.turnOnHeater(() => {
          this.turnOnWashingMachine(() => console.log('Finish all chores!!!'));
        });
      });
    });
    */

    this.closeWindow()
      .then((msg) => {
        console.log(msg);
        return this.turnOnAC();
      })
      .then((msg) => {
        console.log(msg);
        return this.turnOnHeater();
      })
      .then((msg) => {
        console.log(msg);
        return this.turnOnWashingMachine();
      })
      .then((msg) => {
        console.log(msg);
        console.log('Finish all chores!!!');
      });
  }

  closeWindow(): Promise<String> {
    return new Promise((callInThen, callInCatch) => {
      setTimeout(() => {
        callInThen('Window is closed!');
      }, 3000);
    });
  }

  turnOnAC(): Promise<String> {
    return new Promise((callInThen, callInCatch) => {
      setTimeout(() => {
        callInThen('AC is ON!');
      }, 1000);
    });
  }

  turnOnHeater(): Promise<String> {
    return new Promise((callInThen, callInCatch) => {
      setTimeout(() => {
        callInThen('heater is turn on!');
      }, 1500);
    });
  }

  turnOnWashingMachine(): Promise<String> {
    return new Promise((callInThen, callInCatch) => {
      setTimeout(() => {
        callInThen('Washing Machine is on!');
      }, 2500);
    });
  }
}
