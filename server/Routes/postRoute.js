const express = require('express');


const postRoute = express.Router();

const postController = require('../Controllers/postController');

const upload = require('../Controllers/imgController.js');

// const authMiddlewar = require('./MiddleWare/miidleWareAuth.js');



// Lire tous les post

postRoute.get('/', postController.showPost);


// Créer un nouveau tweet

postRoute.post('/',upload.array('pictures', 5), postController.createPost);


// Lire les post à partir de l'Id utilisateur

postRoute.get('/:userId', postController.showAllByUserId );

// Modification d'un tweet

postRoute.put('/:id', postController.editPost);

// Supprimer un tweet

postRoute.delete('/:id', postController.deletePost);

//Liker un post 

// postRoute.post('/:id/like')

// module.exports = postRoute;
