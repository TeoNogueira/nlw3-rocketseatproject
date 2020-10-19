const Database = require("./db.js");

function saveOrphanage(db, orphanage) {
  return db.run(` INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends


         ) VALUES (
           "${orphanage.lat}",
           "-49.6392672",
           "Lar dos meninos",
           "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social. ",
           "5581983663530",
           "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
           "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
           "Horário de visitas Das 18h até 8h",
           "0"
         );
      
      `);
}

module.exports = saveOrphanage;
