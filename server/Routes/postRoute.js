const express = require('express');


const postRoute = express.Router();

const postController = require('../Controllers/postController');

const upload = require('../Controllers/imgController.js');

const protect = require('../Routes/midleware/midleware');





// Lire tous les post

postRoute.get('/',protect.authenticateUser, postController.showPost);


// Créer un nouveau post

postRoute.post('/',protect.authenticateUser,protect.authorizeRoles('ADMIN','ARTIST','CURATOR'), upload.array('image', 1), postController.createPost);


// Lire les post à partir de l'Id utilisateur

postRoute.get('/:userId',protect.authenticateUser, postController.showAllByUserId );

// Modification d'un post

postRoute.put('/:id',protect.authenticateUser, postController.editPost);

// Supprimer un tweet

postRoute.delete('/:id',protect.authenticateUser, postController.deletePost);

//Liker un post 

// postRoute.post('/:id/like')

module.exports = postRoute;
