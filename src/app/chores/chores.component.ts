import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-chores',
  standalone: true,
  imports: [],
  templateUrl: './chores.component.html',
  styleUrl: './chores.component.scss',
})
export class ChoresComponent {
  async doChores() {
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

    /*
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
      */

    const closeWinMsg = await this.closeWindow();
    console.log(closeWinMsg);

    const turnOnACMsg = await this.turnOnAC();
    console.log(turnOnACMsg);

    const turnOnHeaterMsg = await this.turnOnHeater();
    console.log(turnOnHeaterMsg);

    const turnOnWashingMachineMsg = await this.turnOnWashingMachine();
    console.log(turnOnWashingMachineMsg);

    console.log('Finish all chores!!!');
  }

  doChores2() {
    const numbers$ = of(1, 2, 3, 4, 5, 6); // simple observable that emits three values

    const subscription = numbers$
      .pipe(map((val) => val * 2))
      .subscribe((val) => console.log(val));
  }

  private seqSub() {}

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
