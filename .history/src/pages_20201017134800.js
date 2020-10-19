module.exports = {


   janicleide(req, res) {
  
   return res.render('janicleide')
},

    orphanage(req, res) {
            

        return res.render('orphanage')

    },


    orphanages(req, res) {
        return res.render('orphanages')


    },

    createOrphanages(req, res) {

        return res.render('create-orphanage')


    }

}