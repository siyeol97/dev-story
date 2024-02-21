import { connectDB } from '@/utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      res.status(200).json('GET method');
    }
    if (req.method === 'POST') {
      if (req.body.title === '' || req.body.content === '') {
        res.status(500).json('유효하지 않은 형식 입니다.');
      }
      const changedPost = { title: req.body.title, content: req.body.content };
      const client = await connectDB;
      const db = client.db('siyeol_blog');
      await db
        .collection('blog_post')
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: changedPost });
      res.redirect(302, `/post/${req.body._id}`);
    }
  } catch (error) {
    res.status(500).json({ error: 'failed to load' });
  }
}