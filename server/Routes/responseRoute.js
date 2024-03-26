const express= require ('express')

const responseRoute=express.Router();

const responseController = require ('../Controllers/responseForum.js')

responseRoute.get('/', responseController.showReplies);

responseRoute.post('/', responseController.createReplie);

responseRoute.get('/:id', responseController.showReplieById);

responseRoute.put('/:id', responseController.updateReplie);

responseRoute.delete('/:id', responseController.deleteReplie),

module.exports=responseRoute;