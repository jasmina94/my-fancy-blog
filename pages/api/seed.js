import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import BlogPostModel from '../../model/Blog';
import CommentModel from '../../model/Comment';
import UserModel from '../../model/User';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    await UserModel.deleteMany();
    await UserModel.insertMany(data.users);
    await CommentModel.deleteMany();
    await CommentModel.insertMany(data.comments);
    await BlogPostModel.deleteMany();
    await BlogPostModel.insertMany(data.blogPosts);
    await db.disconnect();

    res.send({ message: 'Seeded successfully'});
});

export default handler;