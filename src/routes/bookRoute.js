const routes = require("express").Router()

routes.post("/", async (request, response) =>{

    return response.status(200).json({ ok: "ok" })
});

routes.get("/", async (request, response) =>{

    return response.status(200).json({ ok: "ok" })
})

routes.get("/:bookID", async (request, response) =>{

    return response.status(200).json({ ok: "ok" })
})

routes.put("/:bookID", async (request, response) => {

    return response.status(200).json({ ok: "ok" })
})

routes.delete("/:bookID", async (request, response) =>{

    return response.status(200).json({ ok: "ok" })
})

module.exports = (app) => app.use("/books", routes)