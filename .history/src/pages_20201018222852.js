module.exports = {


   index(req, res) {
  
   return res.render('index')
},

    orphanage(req, res) {
            

        return res.render('orphanage')

    },


    orphanages(req, res) {
        return res.render('orphanages', {orphanages})


    },

    createOrphanages(req, res) {

        return res.render('create-orphanage')


    }

}