// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

const path = require('path');

// iniciando o express

const server = express()



// criar uma rota
server.get('/public/images/arrow.svg', (request, response) => {

  
  return response.sendFile(path.join(__dirname, 'views', 'index'))

 
})                     

//ligar o servidor

server.listen(5500)    