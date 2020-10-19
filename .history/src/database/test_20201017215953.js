const Database = require('./db.js');
const saveOrphanage =  require('./saveOrphanage.js');
Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage()

  //consultar dados da tabela
 const selectedOrphanages = await db.all("SELECT * FROM orphanages")
 // console.log(selectedOrphanages)

 // consultar somente um orfanato, pelo ID
 const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
 console.log(orphanage)
})