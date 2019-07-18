import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '@app/category/interfaces/category';

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient
  ) {}

  getList(): Observable<object> {
    return this.http.get('admin/category/list');
  }

  save(category: Category): Observable<object> {
    return this.http.put('admin/category/save', category);
  }

  delete(id: string): Observable<object> {
    return this.http.delete(`admin/category/delete?id=${id}`);
  }
}
