import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPost } from '@app/post/interfaces/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient
  ) {}

  getList(): Observable<object> {
    return this.http.get('admin/post/list');
  }

  update(post: IPost): Observable<object> {
    return this.http.put('admin/post/update', post);
  }

  delete(id: string): Observable<object> {
    return this.http.delete(`admin/post/delete?id=${id}`);
  }
}
