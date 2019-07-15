import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonModalService {
  public popupIsShown: Subject<boolean> = new Subject<boolean>();

  constructor() {}
}
