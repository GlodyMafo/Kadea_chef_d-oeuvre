const express = require('express');


const postRoute = express.Router();

const postController = require('../Controllers/postController');

const upload = require('../Controllers/imgController.js');

const authMiddleware = require('./midleware/midleware.js');
const restrictMidleware = require('./midleware/restrict.js')




// Lire tous les post

postRoute.get('/',authMiddleware, postController.showPost);


// Créer un nouveau post

postRoute.post('/',authMiddleware,restrictMidleware('ARTIST'),upload.array('image', 1), postController.createPost);


// Lire les post à partir de l'Id utilisateur

postRoute.get('/:userId',authMiddleware, postController.showAllByUserId );

// Modification d'un post

postRoute.put('/:id',authMiddleware, postController.editPost);

// Supprimer un tweet

postRoute.delete('/:id',authMiddleware, postController.deletePost);

//Liker un post 

// postRoute.post('/:id/like')

module.exports = postRoute;
