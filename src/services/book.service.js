import User from '../models/user.model';
import BookStore from '../models/book.model';

//get all users
export const getAllBooks = async () => {
  const data = await BookStore.find();
  console.log(data,data)
  return data;
};


//get single user
export const getBook = async (id) => {
  const data = await BookStore.findById(id);
  return data;
};
