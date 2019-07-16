import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Modals } from '@app/common/modals.enum';

@Injectable()
export class CommonModalService {
  public popupIsShown: Subject<{name: string, isOpen: boolean}> = new Subject<null>();

  constructor() {}

  openModal(modalName: Modals) {
    this.popupIsShown.next({
      name: modalName,
      isOpen: true,
    });
  }

  closeModal(modalName: Modals) {
    this.popupIsShown.next({
      name: modalName,
      isOpen: false,
    });
  }
}
