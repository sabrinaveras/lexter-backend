const mongoose = require("../database/connection");

const BookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("book", BookSchema)

