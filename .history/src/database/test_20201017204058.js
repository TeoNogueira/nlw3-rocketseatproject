const Database = require('./db/js');

Database.then(function(db) {
    // inserir dados na tabela
       db.run(`
          INSERT INTO orphanages (
             lat,
             lng,
             name,
             whatsapp,
             images,
             instructions,
             opening_hours,
             open_on_weekends


          ) VALUES (
            "-27.2125361"

          );
       
       `)



  //consultar dados da tabela

})