import { Router } from 'express';
import { createPost, deletePost, getPosts, updatePost } from '../controllers/post.controller.js';

const router = Router();

router.route('/create').post(createPost);
router.get('/getPosts', getPosts);
router.patch('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

export default router;
