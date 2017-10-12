const routes = require('express').Router();
const handleSignup = require('./controllers/signupHandler.js');
const handleLogin = require('./controllers/loginHandler.js');

routes.post('/signup', handleSignup);
routes.get('/login', handleLogin);


module.exports = routes;