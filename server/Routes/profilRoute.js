const express = require('express')

const profilRoutes = express.Router()

const profilController = require('server/Controllers/profilController.js')

const upload = require('server/Controllers/imgController.js');



// voir tous les utilisateurs

profilRoutes.get('/', profilController.profilUsers);


// Créer un nouveau profil

profilRoutes.post('/', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), profilController.postProfil);


// Lire un profil

profilRoutes.get('/:userId', profilController.showProfilById);

// Modification d'un profil

profilRoutes.put('/:userId',upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), profilController.editProfil);

// Supprimer un profil

profilRoutes.delete('/:userId', profilController.deleteProfil);

module.exports = profilRoutes;
