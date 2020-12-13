const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
require("./routes/bookRoute")(app)

app.listen(process.env.PORT, () => {
    console.log("running")
})