const express = require("express")
const logger = require("morgan")
const compression = require("compression")
const bodyParser = require("body-parser")

const app = express();

app.use(compression());
app.use(bodyParser.json())
app.use(logger("dev"))


app.get("/", (req, res) => {
    console.log("hi endpoint");
    res.json({ name: "franco", lastName: "di leo", age: 22, animales: ["perro", "gato"], })
})


app.get("/product", (req, res) => {
    res.json({ producto: "cepillo", precio: 400, stock: 50 })
})

app.post("/new", (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: "producto Agregado crack" })

})

app.listen(3001, console.log("escuchando en el puerto 3001"))