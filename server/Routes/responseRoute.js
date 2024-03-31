const express= require ('express')
const protect = require('../Routes/midleware/midleware');

const responseRoute=express.Router();

const responseController = require ('../Controllers/responseForum.js')

responseRoute.get('/', protect.authenticateUser,responseController.showReplies);

responseRoute.post('/',protect.authenticateUser, responseController.createReplie);

responseRoute.get('/:id',protect.authenticateUser, responseController.showReplieById);

responseRoute.put('/:id', protect.authenticateUser,responseController.updateReplie);

responseRoute.delete('/:id',protect.authenticateUser, responseController.deleteReplie),

module.exports=responseRoute;