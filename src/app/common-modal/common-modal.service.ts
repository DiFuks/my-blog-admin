import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CommonModalService {
  activeModalRef: BehaviorSubject<NgbModalRef> = new BehaviorSubject(null);

  save: Observable<object>;

  constructor(
    private modal: NgbModal,
    private toastr: ToastrService,
  ) {}

  openModal<T>(content: any, data: T, save: Observable<object>) {
    this.save = save;

    const modal = this.modal.open(content);

    modal.componentInstance.data = data;

    this.activeModalRef.next(modal);
  }

  onSave() {
    this.save.subscribe(() => {
      this.toastr.success('Save successful');

      this.activeModalRef.getValue().close();
    }, (error: HttpErrorResponse) => {
      this.toastr.error(error.error.message);
    });
  }
}
