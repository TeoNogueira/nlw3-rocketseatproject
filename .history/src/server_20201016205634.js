// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

const path = require('path');

// iniciando o express

const server = express()

// ultilizando os arquivos estáticos
server
.use(express.static('public'));
console.log(request.query)                                  //request.query pega todos os dados depois da interrogação ex:http://127.0.0.1:5500/?id=1&name=Teo

// criar uma rota
server.get('/', (request, response) => {

  
  return response.sendFile(path.join(__dirname, 'views', 'index'))

 
})                     

//ligar o servidor

server.listen(5500)    