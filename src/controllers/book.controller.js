import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service'

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooks = async (req, res, next) => {
    try {
        const data = await BookService.getAllBooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All Books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBook = async (req, res, next) => {
    try {
        const data = await BookService.getBook(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};


