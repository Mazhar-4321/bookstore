import express from 'express';
import * as BookController from '../controllers/book.controller'
import { userAuth } from '../middlewares/auth.middleware'

const router = express.Router();

router.get('',userAuth, BookController.getAllBooks);


export default router;
