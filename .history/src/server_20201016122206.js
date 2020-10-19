// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

// iniciando o express

const server = express()



// criar uma rota
server.get('/test', (request, response) => {

  
  console.log(__dirname + '__dirname')

 // return response.sendFile(__dirname)
})

//ligar o servidor

server.listen(5500)    