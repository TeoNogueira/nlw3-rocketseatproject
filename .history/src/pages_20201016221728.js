module.exports = {
    const index = req.query.index

   index(req, res) {
  
   return res.render('index')
},

    orphanage(req, res) {
            

        return res.render('orphanage')

    },


    orphanages(req, res) {
        return res.render('orphanages')


    },

    createOrphanages(req, res) {

        return res.render('create-orphanages')


    }

}