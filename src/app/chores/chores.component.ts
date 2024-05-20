import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

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
    console.log('Begin do chores2...');

    const closeWindow$ = from(this.closeWindow());
    // closeWindow$.subscribe((val) => console.log(val));

    const turnOnAC$ = from(this.turnOnHeater());
    // turnOnAC$.subscribe((val) => console.log(val));

    /* concat(closeWindow$, turnOnAC$).subscribe((val) => {
      console.log(val);
    }); */

    const observable = new Observable((ob) => {
      setTimeout(() => {
        ob.next('XXXXX');
        setTimeout(() => {
          ob.next('YYYYYY');
          setTimeout(() => {
            ob.next('ZZZZZ');
            ob.complete();
          }, 2500);
        }, 2000);
      }, 3000);
    });

    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('finish everything!!'),
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
