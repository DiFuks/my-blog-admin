import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient
  ) {}

  getPosts() {
    return this.http.get('public/post/shortList');
  }
}
