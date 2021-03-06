
//ativando as bibliotecas e frameworks para ajudar na construção da aplicação
const express = require('express');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require("./routes.js")
const VideoController = require('./controllers/VideoController.js')
const CategoriaController = require('./controllers/CategoriaController.js')

dotenv.config();

//iniciando o uso das bibiliotecas
 const app = express();
 app.use(routes);
 app.use(express.json());
 const PORT = process.env.PORT ||36000;


//conexão com banco de dados Cloud(AWS) - MongoDB
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Sucess DB_connection"))


//process.env.PORT ||

  app.listen(PORT, () =>{
    console.log("Express started at http://localhost:36000")
}) 
