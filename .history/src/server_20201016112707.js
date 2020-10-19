// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

// iniciando o express

const server = express()



// criar uma rota
server.get('/', () => {

  
  console.log(request, response)

  return response.send('Oi Você que está aí do outro lado da telinha')
})

//ligar o servidor

server.listen(5500)    