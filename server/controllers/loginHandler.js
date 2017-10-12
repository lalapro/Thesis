const express = require('express');
const sequelize = require('sequelize');
const db = require('../../db/index.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const handleLogin = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let select = `SELECT * FROM User WHERE Username ='${username}'`;

  db.query(select, null, (err, results) => {
    if (err) {
      res.status(404).send(`Encountered error during post ${err}`);
    } else {
      if (results.data) {
        res.send(results.data);
        bcrypt.compare(password, results.data.password, function(err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      }
    }
  })
}

module.exports = handleLogin; 