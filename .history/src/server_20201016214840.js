// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');
const pages = require('./server.js')
const path = require('path');

// iniciando o express

const server = express()
server
// ultilizando os arquivos estáticos

.use(express.static('public'))
                                

// configurar template engine

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// criar uma rota
.get('/', (request, response) => {
  
  const city = req.query.city
  return res.render('index', { city })

 
})   
                   
 
//ligar o servidor

server.listen(5500)    