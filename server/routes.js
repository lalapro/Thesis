const routes = require('express').Router();
const handleSignup = require('./controllers/signupHandler.js');
const handlenNewTask = require('./controllers/newTaskHandler.js');

routes.post('/signup', handleSignup);
routes.post('/newTask', handlenNewTask);

module.exports = routes;