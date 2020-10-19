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
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', {orphanages})
    
            
        } catch (error) {
            return res.send('Erro no banco de dados!')

        }
        
        const orphanages = await db.all("SELECT * FROM orphanages")
        return res.render('orphanages', {orphanages})


    },

    createOrphanages(req, res) {

        return res.render('create-orphanage')


    }

}