import { Component, Input, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalService } from '@app/common-modal/common-modal.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
})
export class CommonModalComponent {
  @ViewChild('modalRef', {static: false})
  modalRef: TemplateRef<any>;

  modalOpenRef: NgbModalRef;

  @Input() title: string;

  @Input() name: string;

  @Output() save: EventEmitter<null> = new EventEmitter();

  constructor(
    private modal: NgbModal,
    private commonModalService: CommonModalService,
  ) {
    commonModalService.popupIsShown.subscribe((value => {
      if (value.isOpen && value.name === this.name) {
        this.modalOpenRef = this.open();
      }
      if (!value.isOpen && value.name === this.name) {
        this.modalOpenRef.close();
      }
    }));
  }

  onSave() {
    this.save.emit();
  }

  open(): NgbModalRef {
    return this.modal.open(this.modalRef);
  }
}
