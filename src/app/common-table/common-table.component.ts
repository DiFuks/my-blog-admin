import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
})
export class CommonTableComponent {
  @Input() rows: Array<any>;

  @Input() columns: TableColumn[];

  @Output() edit: EventEmitter<string> = new EventEmitter();

  @Output() delete: EventEmitter<string> = new EventEmitter();

  onEdit(id?: string) {
    this.edit.emit(id);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
