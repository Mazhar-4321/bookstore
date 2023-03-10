import HttpStatus from 'http-status-codes'
import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    const user = await jwt.verify(bearerToken, process.env.SECRET_KEY);
    console.log("llllllllllll",req.body)
    next();
  } catch (error) {
    next(error);
  }
}
export const userAuth1 = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    const user = await jwt.verify(bearerToken, process.env.SECRET_KEY1);
    next();
  } catch (error) {
    next(error);
  }
}

export const userAuthForReset = async (req, res, next) => {
  try {
    let bearerToken = req.params.id;
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    const user = await jwt.verify(bearerToken, process.env.FORGET_PASSWORD_SECRET_KEY);
    next();
  } catch (error) {
    next(error);
  }
}
