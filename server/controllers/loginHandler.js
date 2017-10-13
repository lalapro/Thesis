const express = require('express');
const sequelize = require('sequelize');
const db = require('../../db/index.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const handleLogin = (req, res) => {
  let username = req.query.username;
  let password = req.query.password;

  let select = `SELECT * FROM User WHERE Username ='${username}'`;
  db.query(select, null, (err, results) => {
    if (err) {
      res.send('error in login query', err);
    } else {
      if (results) {
        bcrypt.compare(password, results[0].Hash_Password, function(err, result) {
          if (result === true) {
            res.send(results[0]);
          } else {
            res.send('error in bcrypcompare');
          }
        })
      }
    }
  })
}

module.exports = handleLogin; 