const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');



// //voir les profils

exports.profilUsers = async (req, res) => {
  try {
    // Récupérer tous les profils de la base de données
    const profiles = await prisma.profile.findMany();

    res.status(200).json(profiles);

  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'An error occurred while fetching profiles.' });
  }
}


//profil connecté

exports.connectedProfil = async (req, res) => {
  const { userId } = req.id;
  try {
    const userProfile = await prisma.profile.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!userProfile) {
      return res.status(404).json({ message: 'Profil introuvable' });
    }

    res.json(userProfile);
  } catch (error) {
    console.error('Erreur lors de la récupération du profil:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.showProfilById = async (req, res) => {
  const { userId } = req.params;

  try {
    // Récupérez le profil dans la base de données en fonction de l'ID de l'utilisateur
    const profile = await prisma.profile.findUnique({
      where: {
        userId: parseInt(userId),
      },
    });

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found.' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'An error occurred while fetching profile.' });
  }
};


// // Modification les information d'un profil

exports.editProfil = async (req, res) => {

  const token = req.header('Authorization');




  try {

    const decoded = jwt.verify(token, 'my_token');
    const userId = decoded.userId

    const { profileImage, coverImage, biography, country } = req.body;
    // const picturePaths = Object.values(req.files).map(file => file[0].path);
    // const picturePath = req.file.path;
    const profileImagePath = req.files['profileImage'][0].path;
    const coverImagePath = req.files['coverImage'][0].path;
    // const picturePaths = req.files.map(file => file.path);
    // Mettez à jour le profil dans la base de données en fonction de l'ID de l'utilisateur
    const updatedProfile = await prisma.profile.update({
      where: {
        userId: userId,
      },
      data: {
        profileImage: profileImagePath,
        coverImage: coverImagePath,
        biography,
        country
      },
    });

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'An error occurred while updating profile.' });
  }
}

// // Supprimer un compte utilisateur

exports.deleteProfil = async (req, res) => {
  const { userId } = req.params;

  try {
    // Vérifiez si le profil existe
    const existingProfile = await prisma.profile.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!existingProfile) {
      return res.status(404).json({ error: 'Profile not found.' });
    }

    // Supprimez le profil de la base de données
    await prisma.profile.delete({
      where: {
        userId: parseInt(userId),
      },
    });

    res.status(200).json({ message: 'Profile deleted successfully.' });
  } catch (error) {
    console.error('Error deleting profile:', error);
    res.status(500).json({ error: 'An error occurred while deleting profile.' });
  }
}



