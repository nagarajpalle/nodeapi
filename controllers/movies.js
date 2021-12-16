const movies = require('../models/movies.model')
exports.findAll = (req, res) => {
   
    movies.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };