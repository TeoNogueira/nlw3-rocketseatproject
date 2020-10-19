module.exports = {


   index( req, res) {
   const city = req.query.city
   return res.render('index', { city })
},

    orphanage(req, res) {
            

        return res.render('index')

    },


    orphanages(req, res) {



    },

    createOrphanages(req, res) {




    }

}