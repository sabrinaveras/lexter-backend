const mongoose = require("../database/connection");

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("book", BookSchema)

