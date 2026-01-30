import express from "express"

const app = express()

app.listen(8088)

app.get("/", (req, res) => {
    res.send("This is the home page");
})

app.get("/get-product", async (req, res) => {
    
    res.send("This is the product page");
})