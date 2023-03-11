import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service'


export const addBookToCart = async (req, res, next) => {
    try {
        console.log(req.body)
        req.body.userID='def@gmail.com'
        const data = await CartService.addBookToCart(req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book Added To Cart Successfully'
        });
    } catch (error) {
        next(error);
    }
};