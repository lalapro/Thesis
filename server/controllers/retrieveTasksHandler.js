const express = require('express');
const db = require('../../db/index.js');

const handleTasks = (req, res) => {
    let username = req.query.username;
    let selectUserID = `SELECT ID FROM User WHERE Username = '${username}'`;
    console.log(req.query)
    db.query(selectUserID, null, (err, results) => {
      if (err) {
        res.status(404).send(`We encountered an error looking up your information ${err}`);
      } else {
        console.log(results)
        let User_ID = results[0].ID;
        let selectCats = `SELECT Category FROM CategoryDeets WHERE User_ID = ${User_ID}`;
        db.query(selectCats, null, (err, results) => {
          if (err) {
            res.status(404).send(`We encountered an error looking up the categories ${err}`);
          } else {
            console.log(results[0]);
            res.status(201).send(results);
          }
        })
      }
    })
  }

}