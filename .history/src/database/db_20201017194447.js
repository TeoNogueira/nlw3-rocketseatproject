const database = require('sqlite-async');

Database.open(__dirname + '/database.sqlite').then(execute)

console.log('quaisquer coisas')

function execute(db) {}