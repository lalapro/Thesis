const express = require('express');
const db = require('../../db/index.js');

const handleNewLocation = (req, res) => {

  let user = req.body.user_ID;
  let title = req.body.title;
  let description = req.body.description;
  let avatar = req.body.avatar;
  let lng = req.body.longitude;
  let lat = req.body.latitude;
  console.log('new location received', req.body)
  let query = `INSERT INTO Marker (ID, Title, Description, Avatar, Latitude, Longitude, Radius, User_ID) VALUES (NULL, '${title}', '${description}', '${avatar}', '${lat}', '${lng}', ${50}, '${user}')`;
  // `INSERT INTO CategoryDeets (ID, Category, Completion_Points, User_ID, Reward_ID, Marker_ID) VALUES (NULL, '${category}', NULL, '${User_ID}', NULL, NULL)`;
  db.query(query, null, (err, results) => {
    if (err) {
      res.status(404).send(`We encountered an error creating the category ${err}`);
    } else {
      res.status(201).send(results);
    }
  })
}


module.exports = handleNewLocation;
