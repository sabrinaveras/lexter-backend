
// root
const root = "/api"

// versions
const v1 = "/v1"

// base version v1
const baseV1 = root + v1

// routes
const book = "/books"


module.exports = {

    book:{
        bookRootV1: baseV1 + book,
        bookCreate: "/",
        bookSelectAll: "/",
        bookSelectID: ":bookID",
        bookUpdate: "/:bookID",
        bookDelete: "/:bookID",
    }
}