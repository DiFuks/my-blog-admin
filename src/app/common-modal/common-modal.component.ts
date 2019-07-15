import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalService } from '@app/common-modal/common-modal.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
})
export class CommonModalComponent {
  @ViewChild('modalRef', {static: true})
  modalRef: TemplateRef<any>;

  @Input() title: string;

  constructor(
    private modal: NgbModal,
    private commonModalService: CommonModalService,
  ) {
    commonModalService.popupIsShown.subscribe((value => {
      if (value) {
        this.open();
      }
    }));
  }

  open() {
    this.modal.open(this.modalRef);
  }
}
