const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');
module.exports = {


   index(req, res) {
  
   return res.render('index')
},

    orphanage(req, res) {
            

        return res.render('orphanage')

    },


    orphanages(req, res){
        // colocar o orphanage pelo banco
        const orphanages = await db.all("SELECT * FROM orphanages")
        return res.render('orphanages', {orphanages})


    },

    createOrphanages(req, res) {

        return res.render('create-orphanage')


    }

}