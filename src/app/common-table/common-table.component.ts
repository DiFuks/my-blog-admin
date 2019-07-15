import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
})
export class CommonTableComponent {
  @Input() rows: Array<any>;

  @Input() columns: Array<{name: string}>;

  @Output() edit: EventEmitter<string> = new EventEmitter();

  onEdit(id: string) {
    this.edit.emit(id);
  }
}
