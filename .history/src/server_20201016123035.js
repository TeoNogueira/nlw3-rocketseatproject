// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

const path require('path');

// iniciando o express

const server = express()



// criar uma rota
server.get('/test', (request, response) => {

  
  console.log(path.join(__dirname, 'views'))

 // return response.sendFile(__dirname)
})

//ligar o servidor

server.listen(5500)    