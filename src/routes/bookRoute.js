const routes = require("express").Router()

const BookController = require("../controllers/bookController")

routes.post("/", BookController.createBook);

routes.get("/", BookController.selectBooks)

routes.get("/:bookID", BookController.selectBook)

routes.put("/:bookID", BookController.updateBook)

routes.delete("/:bookID", BookController.deleteBook)

module.exports = (app) => app.use("/books", routes)