module.exports = {

    async createBook(request, response){

        try{
            return response.status(200).json({ ok: "ok" })
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    async selectBooks(request, response){

        try{
            return response.status(200).json({ ok: "ok" })
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    async selectBook(request, response){

        try{
            return response.status(200).json({ ok: "ok" })
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    async updateBook(request, response){

        try{
            return response.status(200).json({ ok: "ok" })
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    },

    async deleteBook(request, response){

        try{
            return response.status(200).json({ ok: "ok" })
        }catch (error) {
            return response.status(500).json({ error: error.message})
        }
    }
}