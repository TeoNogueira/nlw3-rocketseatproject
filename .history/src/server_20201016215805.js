// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');
const pages = require('./pages.js');
const path = require('path');

// iniciando o express

const server = express()
server
// ultilizando os arquivos estáticos

.use(express.static('public'))
                                

// configurar template engine

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.index)
.get('/orphanages', pages.index)
.get('/create-orphanage', pages.index)


  

   
                   
 
//ligar o servidor

server.listen(5500)    