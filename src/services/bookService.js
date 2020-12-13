const Book = require("../models/book")

const messages = require("../utils/messages")

module.exports = {

    async createBookAsync(body){

        try{
            if(await Book.findOne({title: body.title, author: body.author}))
                return {
                    message: messages.book.bookAlreadyExist,
                    code: 409
                }

            const book = await Book.create(body)

            return {
                body: book,
                message: messages.book.bookCreated,
                code: 201
            }
        }catch (error) {
            return {
                message: error.message,
                code: 500
            }
        }
    },

    async selectBooksAsync(){

        try{
            const books = await Book.find()

            if(!books)
                return{
                    message: messages.book.bookNotFound,
                    code: 404
                }

            return {
                body: books,
                message: messages.book.bookAll,
                code: 200
            }
        }catch (error) {
            return {
                message: error.message,
                code: 500
            }
        }
    },

    async selectBookAsync(bookID){

        try{
            const book = await Book.findById(bookID)

            if(!book)
                return {
                    message: messages.book.bookNotFoundID,
                    code: 404
                }

            return {
                body: book,
                message: messages.book.bookID,
                code: 200
            }
        }catch (error) {
            return {
                message: error.message,
                code: 500
            }
        }
    },

    async updateBookAsync(body, bookID){

        try{
            if(!await Book.findById(bookID))
                return {
                    message: messages.book.bookNotFoundID,
                    code: 404
                }

            const book = await Book.findByIdAndUpdate(bookID, { ...body }, { new: true })

            return {
                body: book,
                message: messages.book.bookUpdated,
                code: 200
            }
        }catch (error) {
            return {
                message: error.message,
                code: 500
            }
        }
    },

    async deleteBookAsync(bookID){

        try{

            if(!await Book.findById(bookID))
                return{
                    message: messages.book.bookNotFoundID,
                    code: 404
                }


            await Book.findByIdAndDelete(bookID)

            return {
                message: messages.book.bookDeleted,
                code: 204
            }
        }catch (error) {
            return {
                message: error.message,
                code: 500
            }
        }
    }
}