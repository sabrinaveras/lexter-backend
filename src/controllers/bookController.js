const BookService = require("../services/bookService")

module.exports = {

    // region create

    async createBook(request, response){

        try{
            const { title, author } = request.body

            const result = await BookService.createBookAsync({title, author})

            return response.status(result.code).json(result)
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    // endregion create

    // region select

    async selectBooks(request, response){

        try{
            const result = await BookService.selectBooksAsync()

            return response.status(result.code).json(result)
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    async selectBook(request, response){

        try{
            const result = await BookService.selectBookAsync(request.params.bookID)


            return response.status(result.code).json(result)
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    // endregion select

    // region update

    async updateBook(request, response){

        try{
            const result = await BookService.updateBookAsync(request.body, request.params.bookID)

            return response.status(result.code).json(result)
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    // endregion update

    // region delete

    async deleteBook(request, response){

        try{
            const result = await BookService.deleteBookAsync(request.params.bookID)

            return response.status(result.code).json(result)
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    }

    // endregion delete
}