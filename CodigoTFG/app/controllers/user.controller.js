const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getUsers = (req, res) => {

  User.findAll()
  .then(async (users) => {
    const roledUsers = users.map(async user => {
      const roles = await user.getRoles()
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: roles.map(role => role.name)
      }
    })
    return Promise.all(roledUsers)
  })
  .then(async users => {    
    res.status(200).send({users: users})
  })
}

exports.getUser = (req, res) => {
  console.log(req.query.id)
  User.findOne({    where: {
    id: req.query.id
  }})
  .then(user => {
    res.status(200).send({
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    })
  })
  .catch(error => res.status(500).send({message: error.message}))
}