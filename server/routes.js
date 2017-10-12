const routes = require('express').Router();
const handleSignup = require('./controllers/signupHandler.js');
const handleLogin = require('./controllers/loginHandler.js');
const handlenNewTask = require('./controllers/newTaskHandler.js');

routes.post('/signup', handleSignup);
routes.get('/login', handleLogin);
routes.post('/newTask', handlenNewTask);


module.exports = routes;
