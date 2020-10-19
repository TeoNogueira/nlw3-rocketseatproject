const Database = require('./db.js');
const saveOrphanage =  require('./saveOrphanage.js');
Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, { 
      id: 1,
      lat: "-27.2122361",
      lng: "-49.6392672",
               name: "Lar de amor",
               descripition: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social. ",
             
                images: [
                           "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                          
                           "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

                ].toString(),

     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

     opening_hours: "Horário de visitas Das 18h até 8h",
     open_on_weekends: "1"


  })

  //consultar dados da tabela
 const selectedOrphanages = await db.all("SELECT * FROM orphanages")
 // console.log(selectedOrphanages)

 // consultar somente um orfanato, pelo ID
 const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
 console.log(orphanage)
})