const express = require('express');

const ConnectedRoute = express.Router();

const authentification = require("../Controllers/authenticationController.js")

ConnectedRoute.get('/', authentification.showConnectedProfil);

module.exports = ConnectedRoute;