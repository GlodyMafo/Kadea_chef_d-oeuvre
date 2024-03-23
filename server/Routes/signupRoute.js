const express = require('express');

const signup = express.Router();

const authentification = require("../Controllers/authenticationController.js")

signup.post('/', authentification.signUpUser);

module.exports = signup;