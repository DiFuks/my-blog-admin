import { PostContent } from '@app/post/interfaces/post-content';

export class IPost {
  id: string;

  title: string;

  description: string;

  content: PostContent;

  url: string;

  category: string;

  createdAt: Date;

  updatedAt: Date;
}
