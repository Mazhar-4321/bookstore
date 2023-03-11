import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import BookRoute from './book.route'
import CartRoute from './cart.route'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/books',BookRoute);
  router.use('/cart',CartRoute);

  return router;
};

export default routes;
