import { PostTypes } from '@app/post/enums/post-types';

export type PostContent = Array<{
  'type': PostTypes
  'content': string
}>;
