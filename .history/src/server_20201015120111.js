// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');
const server = express()



// criar uma rota
server.get('/', () => {

  
  console.log('oi')
})

//ligar o servidor

