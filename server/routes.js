const routes = require('express').Router();
const handleSignup = require('./signupHandler.js');

routes.post('/signup', handleSignup);

module.exports = routes;