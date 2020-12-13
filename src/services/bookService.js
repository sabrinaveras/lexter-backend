const Book = require("../models/book")

const messages = require("../utils/messages")
const statusCode = require("../utils/codeStatus")

module.exports = {

    async createBookAsync(body){

        try{
            if(await Book.findOne({title: body.title, author: body.author}))
                return {
                    message: messages.book.bookAlreadyExist,
                    code: statusCode.Status409Conflict
                }

            const book = await Book.create(body)

            return {
                body: book,
                message: messages.book.bookCreated,
                code: statusCode.Status201Created
            }
        }catch (error) {
            return {
                message: error.message,
                code: statusCode.Status500InternalServerError
            }
        }
    },

    async selectBooksAsync(){

        try{
            const books = await Book.find()

            if(!books)
                return{
                    message: messages.book.bookNotFound,
                    code: statusCode.Status404NotFound
                }

            return {
                body: books,
                message: messages.book.bookAll,
                code: statusCode.Status200OK
            }
        }catch (error) {
            return {
                message: error.message,
                code: statusCode.Status500InternalServerError
            }
        }
    },

    async selectBookAsync(bookID){

        try{
            const book = await Book.findById(bookID)

            if(!book)
                return {
                    message: messages.book.bookNotFoundID,
                    code: statusCode.Status404NotFound
                }

            return {
                body: book,
                message: messages.book.bookID,
                code: statusCode.Status200OK
            }
        }catch (error) {
            return {
                message: error.message,
                code: statusCode.Status500InternalServerError
            }
        }
    },

    async updateBookAsync(body, bookID){

        try{
            if(!await Book.findById(bookID))
                return {
                    message: messages.book.bookNotFoundID,
                    code: statusCode.Status404NotFound
                }

            const book = await Book.findByIdAndUpdate(bookID, { ...body }, { new: true })

            return {
                body: book,
                message: messages.book.bookUpdated,
                code: statusCode.Status200OK
            }
        }catch (error) {
            return {
                message: error.message,
                code: statusCode.Status500InternalServerError
            }
        }
    },

    async deleteBookAsync(bookID){

        try{

            if(!await Book.findById(bookID))
                return{
                    message: messages.book.bookNotFoundID,
                    code: statusCode.Status404NotFound
                }


            await Book.findByIdAndDelete(bookID)

            return {
                message: messages.book.bookDeleted,
                code: statusCode.Status204NoContent
            }
        }catch (error) {
            return {
                message: error.message,
                code: statusCode.Status500InternalServerError
            }
        }
    }
}