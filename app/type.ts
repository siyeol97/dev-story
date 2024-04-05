import { Document, ObjectId, WithId } from 'mongodb';

export interface Post extends WithId<Document> {
  _id: ObjectId;
  title: string;
  content: string;
  name: string;
  author: string;
  author_image: string;
  created_at: Date;
}

export interface Reply {
  _id: ObjectId;
  comment: string;
  parent_post: string;
  author: string;
  author_image: string;
  name: string;
  created_at: Date;
}
