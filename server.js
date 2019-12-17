const express = require("express")
const path=require("path")
// const bd=require('./banco.js') importar as informações e metodos do banco

const port = 3000
const app = express()

const publicDirectory = path.join(__dirname, './public')
const viewsPath= path.join(__dirname, './views')
app.use(express.static(publicDirectory))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
})


app.get("", (req, res) => {
    res.sendFile(viewsPath+'/inicio.html')
})

app.get("/sobre", (req, res) => {
    res.sendFile(viewsPath+'/sobre.html')
})

app.get("/login", (req, res) => {
    res.sendFile(viewsPath+'/login.html')
})

app.get("/cadastro", (req, res) => {
    res.sendFile(viewsPath+'/cadastro.html')
})

app.get("/usuario", (req, res) => {
    res.sendFile(viewsPath+'/usuario.html')
})



app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
