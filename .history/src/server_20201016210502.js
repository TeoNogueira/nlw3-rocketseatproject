// importar uma biblioteca (ou pacote no caso/dependencia)

const express = require('express');

const path = require('path');

// iniciando o express

const server = express()

// ultilizando os arquivos estáticos
server
.use(express.static('public'))
                                 //request.query pega todos os dados depois da interrogação ex:http://127.0.0.1:5500/?id=1&name=Teo

// criar uma rota
server.get('/', (request, response) => {

  console.log(request.query)
  return response.sendFile(path.join(__dirname, 'views', 'index'))

 
})   
                   
  //para startar o nodemon é so usar npm start e pressionar enter                // instalei o handlerbars.js e antes o nodemon (monitorando do NodeJS assim como o live server do visual code)
//ligar o servidor

server.listen(5500)    