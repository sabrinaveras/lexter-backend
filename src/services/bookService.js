module.exports = {
    
    async createBookAsync(body){

        try{

            return {
                body: "",
                message: "",
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

            return {
                body: "",
                message: "",
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

            return {
                body: "",
                message: "",
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

            return {
                body: "",
                message: "",
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

            return {
                body: "",
                message: "",
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