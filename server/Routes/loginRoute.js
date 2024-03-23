const express = require('express');

const logInRoute = express.Router();

const authentification=require("../Controllers/authenticationController.js")

logInRoute.post('/', authentification.logInUser);

module.exports=logInRoute;