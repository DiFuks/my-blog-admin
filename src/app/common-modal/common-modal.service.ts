import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CommonModalService {
  activeModalRef: NgbModalRef;

  save: Observable<object>;

  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
  ) {}

  openModal<T>(content: any, data: T, save: Observable<object>) {
    this.activeModalRef = this.modal.open(content, {
      size: 'lg',
      backdrop: 'static',
      windowClass: 'common-modal'
    });

    this.activeModalRef.componentInstance.data = data;

    this.save = save;
  }

  onSave() {
    this.save.subscribe(() => {
      this.toastr.success('Save successful');

      this.activeModalRef.close();
    }, (error: HttpErrorResponse) => {
      this.toastr.error(error.error.message || 'Unknown error');
    });
  }
}
