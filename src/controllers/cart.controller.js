import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service'

export const addBookToCart = async (req, res, next) => {
    try {
        const data = await CartService.addBookToCart(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book Added To Cart Successfully'
        });
    } catch (error) {
        next(error);
    }
};