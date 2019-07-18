import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '@app/post/interfaces/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient
  ) {}

  getList(): Observable<object> {
    return this.http.get('admin/post/list');
  }

  save(post: Post): Observable<object> {
    return this.http.put('admin/post/save', post);
  }

  delete(id: string): Observable<object> {
    return this.http.delete(`admin/post/delete?id=${id}`);
  }

  changeActive(id: string, isActive: boolean): Observable<object> {
    return this.http.post('admin/post/changeActive', {
      id,
      isActive,
    });
  }
}
