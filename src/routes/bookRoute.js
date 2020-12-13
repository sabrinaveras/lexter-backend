const routes = require("express").Router()

const BookController = require("../controllers/bookController")

const route = require("../utils/apiRoute")

routes.post(route.book.bookCreate, BookController.createBook);

routes.get(route.book.bookSelectAll, BookController.selectBooks)

routes.get(route.book.bookSelectID, BookController.selectBook)

routes.put(route.book.bookUpdate, BookController.updateBook)

routes.delete(route.book.bookDelete, BookController.deleteBook)

module.exports = (app) => app.use(route.book.bookRootV1, routes)