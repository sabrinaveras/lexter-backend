const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {

    console.log("connected")
})

mongoose.connection.on("error", (error) => {

    console.log("error: ", error)
})

mongoose.connection.on("disconnect", () => {

    console.log("disconnect")
})

module.exports = mongoose;