// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

// iniciando o express

const server = express()



// criar uma rota
server.get('/teofilo-nogueira', (request, response) => {

  
  console.log(__dirname)

  return response.send()
})

//ligar o servidor

server.listen(5500)    