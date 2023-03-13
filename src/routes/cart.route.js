import express from 'express';
import * as CartController from '../controllers/cart.controller'
import { userAuth } from '../middlewares/auth.middleware'

const router = express.Router();

router.put('insert/:productID', CartController.addBookToCart);

router.put('remove/:productID', CartController.removeBookFromCart);

export default router;
