const express = require("express");
const path = require("path");
const hbs = require("hbs");
// const bd=require('./banco.js') importar as informações e metodos do banco

const port = 3000;
const app = express();

const publicDirectory = path.join(__dirname, "../public");
const partialsDirectory = path.join(__dirname, "../public/templates/partials");
const viewsDirectory = path.join(__dirname, "../public/templates");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(publicDirectory));
app.set("view engine", "hbs");
app.set("views", viewsDirectory);
hbs.registerPartials(partialsDirectory);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});



app.get("", (req, res) => {
    res.render("inicio");
});

app.get("/sobre", (req, res) => {
    res.render("sobre");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.get("/usuario", (req, res) => {
    res.render("usuario");
});



app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
