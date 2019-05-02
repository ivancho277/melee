//our FindAll method returns all books in database, the findByID finds a single item and returns that as a response and creates a new book object in our database. .create creats a new book object. .Update updates the books in our database, .remove removes books from our database.
const db = require("../models");
//ALL of this is our server side CRUD operations to maniuplate the database.
module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    console.log("We made it here");
    db.Weapon.find(req.query)
      .then(dbWeapon => res.json(dbWeapon))
      //catches errors
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Weapon.findById(req.params.id)
      .then(dbWeapon => res.json(dbWeapon))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Weapon.create(req.body)
      .then(dbWeapon => res.json(dbWeapon))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Weapon.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbWeapon => res.json(dbWeapon))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Weapon.findById(req.params.id)
      .then(dbWeapon => dbWeapon.remove())
      .then(dbWeapon => res.json(dbWeapon))
      .catch(err => res.status(422).json(err));
  }
};
