import { Component } from '@angular/core';
import {
  Observable,
  forkJoin,
  from,
  mergeMap,
  filter,
  pipe,
  of,
  concatMap,
  flatMap,
  concat,
  defer,
} from 'rxjs';
import { map } from 'rxjs/operators';

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

    const bb = from(this.closeWindow());

    bb.pipe(
      concatMap((data) => {
        console.log(data);
        return cc;
      }),
      concatMap((data) => {
        console.log(data);
        return dd;
      })
    ).subscribe((data) => console.log(data));

    const cc = from(this.turnOnAC());

    const dd = from(this.turnOnHeater());

    //concat(bb, cc, dd).subscribe((msg) => console.log(msg));
  }

  doChores3() {
    console.log('Begin do chores3...');

    const window$ = defer(() => this.closeWindow());
    const ac$ = defer(() => this.turnOnAC());
    const heater$ = defer(() => this.turnOnHeater());
    const washingMachine$ = defer(() => this.turnOnWashingMachine());

    concat(window$, ac$, heater$, washingMachine$).subscribe({
      next: (x) => console.log(x),
      complete: () => console.log('Finish all chores 3!!!!'),
    });

    /* window$.subscribe((data) => {
      console.log(data);
      ac$.subscribe((data) => {
        console.log(data);
        heater$.subscribe((data) => {
          console.log(data);
          washingMachine$.subscribe((data) => {
            console.log(data);
            console.log('Finish all chore 3!!!');
          });
        });
      });
    }); */
  }

  closeWindow(): Promise<String> {
    return new Promise((callInThen, callInCatch) => {
      setTimeout(() => {
        callInThen('Window is closed!');
      }, 5000);
    });
  }

  turnOnAC(): Promise<String> {
    return new Promise((callInThen, callInCatch) => {
      setTimeout(() => {
        callInThen('AC is ON!');
      }, 2000);
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
