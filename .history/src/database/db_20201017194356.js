const database = require('sqlite-async');

Database.open(__dirname + '/database.sqlite').then(function(db) {})

console.log('quaisquer coisas')