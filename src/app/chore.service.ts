import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChoreService {
  myPubisher = new Subject<string>();

  constructor() {}
}
