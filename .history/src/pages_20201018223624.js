const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');
module.exports = {


   index(req, res) {
  
   return res.render('index')
},

    orphanage(req, res) {
            

        return res.render('orphanage')

    },


    async orphanages(req, res){
        try {

            
        } catch (error) {


        }
        
        const orphanages = await db.all("SELECT * FROM orphanages")
        return res.render('orphanages', {orphanages})


    },

    createOrphanages(req, res) {

        return res.render('create-orphanage')


    }

}