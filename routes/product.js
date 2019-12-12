var express = require('express');
var router = express.Router();

module.exports = async () => {
  require('../db/index')
    .then(({ Product, OP }) => {
      /* GET users listing. */
        router.get('/', async function (req, res, next) {
          const {id, name} = req.query
          let user = await Product.find({
            id: id,
            [Op.like]: `%${name}%`

          })
          res.json(user);
      });

    })
    return router
}


