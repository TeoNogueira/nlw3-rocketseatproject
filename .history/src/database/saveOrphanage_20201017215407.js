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
           "${orphanage.lat}",
           "${orphanage.lat}",
           "${orphanage.lat}",
           "${orphanage.lat}",
           "${orphanage.lat}",
           "${orphanage.lat}",
          
         );
      
      `);
}

module.exports = saveOrphanage;
