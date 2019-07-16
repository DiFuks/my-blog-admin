import { IPost } from '@app/post/interfaces/post';

export interface ICategory {
  id: string;

  title: string;

  posts?: Array<IPost>;

  url: string;

  createdAt: Date;

  updatedAt: Date;
}
