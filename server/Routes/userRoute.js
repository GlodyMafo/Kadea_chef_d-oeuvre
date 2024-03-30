const express = require('express')

const userRoutes = express.Router()

const usersController = require('../Controllers/usersController.js')



// const authMiddleware = require('./midleware/midleware.js');

// voir tous les utilisateurs

userRoutes.get('/', usersController.user);

module.exports=userRoutes;