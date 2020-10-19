// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');
const pages = require('./pages.js');
const path = require('path');

// iniciando o express

const server = express()
server
// ultilizando os arquivos estáticos

.use(express.static('public')) parei em 1 hr e 18 minutos
                                

// configurar template engine

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


  

   
                   
 
//ligar o servidor

server.listen(5500)    