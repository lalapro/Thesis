const routes = require('express').Router();
const handleSignup = require('./controllers/signupHandler.js');

routes.post('/signup', handleSignup);

module.exports = routes;