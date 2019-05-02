//our FindAll method returns all books in database, the findByID finds a single item and returns that as a response and creates a new book object in our database. .create creats a new book object. .Update updates the books in our database, .remove removes books from our database. 
const db = require("../models");
//ALL of this is our server side CRUD operations to maniuplate the database. 
module.exports = {
  findAll: function(req, res) {
    db.Armor.find(req.query)
      .then(dbArmor => res.json(dbArmor))
      //catches errors
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Armor.findById(req.params.id)
      .then(dbArmor => res.json(dbArmor))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Armor.create(req.body)
      .then(dbArmor => res.json(dbArmor))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Armor.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbArmor => res.json(dbArmor))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Armor.findById(req.params.id)
      .then(dbArmor => dbArmor.remove())
      .then(dbArmor => res.json(dbArmor))
      .catch(err => res.status(422).json(err));
  }
};
