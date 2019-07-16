import { Component, Input } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalService } from '@app/common-modal/common-modal.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
})
export class CommonModalComponent {
  modalRef: NgbModalRef;

  @Input() title: string;

  @Input() isDelete: boolean;

  constructor(
    private commonModalService: CommonModalService,
  ) {
    this.commonModalService.activeModalRef.subscribe((modalRef: NgbModalRef) => {
      this.modalRef = modalRef;
    });
  }

  onSave() {
    this.commonModalService.onSave();
  }
}
