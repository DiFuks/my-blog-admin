import { Component } from '@angular/core';

@Component({
  template: `
    <app-common-modal title="Confirm delete" [isDelete]="true">
      <div>You are sure?</div>
    </app-common-modal>
  `,
})
export class DeleteConfirmComponent {}
