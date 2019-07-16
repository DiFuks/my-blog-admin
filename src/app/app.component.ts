import { Component, OnInit } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

import { LocalStorageKeys } from '@app/common/local-storage-keys.enum';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem(LocalStorageKeys.USER_SESSION_TOKEN, uuidv4());
  }
}
