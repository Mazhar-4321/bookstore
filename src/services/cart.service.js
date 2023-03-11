import BookStore from '../models/book.model';
import Cart from '../models/cart.model'

export const addBookToCart = async (req) => {
    const productID = req.params.productID
    const userID = req.body.userID
    var cart = await Cart.findOne({ userID: userID })
    var book = await BookStore.findOne({ _id: productID })
    if (book.quantity < 1) {
        throw Error('Stock Not Available')
    }
    book.quantity = 1
    if (cart === null) {
        var cartTotal = book.price
        insertBookIntoCart(userID, book, cartTotal)
    } else {
        updateCart(cart, userID, book, productID)
    }
}

const updateCart = async (cart, userID, book, productID) => {
    var totalPrice = 0
    let index = -1
    var bookArray = cart.books.map(book1 => {
        console.log(book1._id, productID, book1.quantity)
        if (book1._id == productID) {
            index = 1
            book1.quantity += 1
        }
        totalPrice += book1.quantity * book1.price
        return book1
    }
    )
    console.log("after", bookArray)
    if (index === -1) {
        bookArray.push(book)
        totalPrice+=book.price
    }
    const filter = { userID: userID }
    const update = { books: bookArray, cartTotal: totalPrice }
    await Cart.findOneAndUpdate(filter, update)
}

const insertBookIntoCart = async (userID, book, cartTotal) => {
    var cartObject = {}
    cartObject.userID = userID
    cartObject.books = [book]
    cartObject.cartTotal = cartTotal
    await Cart.create(cartObject)
}
