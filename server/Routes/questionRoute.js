const express= require ('express')

const questionRoute = express.Router();

const questionController = require('../Controllers/questionForum.js');

questionRoute.get('/', questionController.showQuestions);

questionRoute.post('/', questionController.createMessage);

questionRoute.get('/:id', questionController.showQuestionById);

questionRoute.put('/:id', questionController.updateQuestion);

questionRoute.delete('/:id', questionController.deleteQuestion);

module.exports=questionRoute;



