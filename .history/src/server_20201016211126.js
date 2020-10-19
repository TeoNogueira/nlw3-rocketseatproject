// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

const path = require('path');

// iniciando o express

const server = express()
server
// ultilizando os arquivos estáticos

.use(express.static('public'))
                                

// configurar template engine

.set('views', path.join(__dirname, "view"))


// criar uma rota
server.get('/', (request, response) => {

  console.log(request.query)
  return response.sendFile(path.join(__dirname, 'views', 'index'))

 
})   
                   
 
//ligar o servidor

server.listen(5500)    