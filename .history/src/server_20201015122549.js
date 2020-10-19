// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

// iniciando o express

const server = express()



// criar uma rota
server.get('/', () => {

  
  console.log('beleza')
})

//ligar o servidor

server.listen(5500)    pausado em 40:42 minutos no video