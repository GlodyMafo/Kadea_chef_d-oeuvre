const express= require ('express')
const protect = require('../Routes/midleware/midleware');

const questionRoute = express.Router();

const questionController = require('../Controllers/questionForum.js');

questionRoute.get('/', protect.authenticateUser, questionController.showQuestions);

questionRoute.post('/', protect.authenticateUser, questionController.createMessage);

questionRoute.get('/:id', protect.authenticateUser, questionController.showQuestionById);

questionRoute.put('/:id',protect.authenticateUser,  questionController.updateQuestion);

questionRoute.delete('/:id',protect.authenticateUser, questionController.deleteQuestion);

module.exports=questionRoute;



