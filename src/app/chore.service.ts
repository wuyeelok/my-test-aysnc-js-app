import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChoreService {
  private myPubisher = new Subject<string>();
  exposePublisher$ = this.myPubisher.asObservable();

  constructor() {}

  notifyUpdateTitle(msg: string) {
    this.myPubisher.next(msg);
  }
}
