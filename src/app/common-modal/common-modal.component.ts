import { Component, Input, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { CommonModalService } from '@app/common-modal/common-modal.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
})
export class CommonModalComponent implements OnInit {
  modalRef: NgbModalRef;

  @Input() title: string;

  @Input() isDelete: boolean;

  constructor(
    private commonModalService: CommonModalService,
  ) {}

  ngOnInit() {
    this.modalRef = this.commonModalService.activeModalRef;
  }

  onSave() {
    this.commonModalService.onSave();
  }
}
