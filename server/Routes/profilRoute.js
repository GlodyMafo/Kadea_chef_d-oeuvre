const express = require('express')

const profilRoutes = express.Router()

const profilController = require('../Controllers/profilController.js')

const upload = require('../Controllers/imgController.js');


// voir tous les utilisateurs

profilRoutes.get('/', profilController.profilUsers);


profilRoutes.get('/idProfil', profilController.connectedProfil);
// Lire un profil

profilRoutes.get('/:userId', profilController.showProfilById);

// Modification d'un profil

profilRoutes.put('/:userId',upload.fields([{ name: 'profilImage', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]), profilController.editProfil);

// Supprimer un profil

profilRoutes.delete('/:userId', profilController.deleteProfil);

module.exports = profilRoutes;
