const { PrismaClient } = require('@prisma/client');
const validator = require('validator');
const prisma = new PrismaClient();

// Lire tous les post
exports.showPost = async (req, res) => {
  try {
    // Récupération de tous les osts de la base de données
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'erreur 500.' });
  }
}

// Créer un nouveau post
exports.createPost = async (req, res) => {
  const { title, description, type } = req.body;
  const picturePaths = req.files.map(file => file.path);

  try {
    if (!validator.isLength(title, { max: 10 }) || !validator.isAlphanumeric(title.replace(/\s/g, ''))) {
      return res.status(400).json({ error: 'Le titre doit avoir au maximum 10 mots sans caractères spéciaux.' });
    }

    if (!validator.isLength(description, { max: 30 })) {
      return res.status(400).json({ error: 'La description doit avoir au maximum 30 mots.' });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        image: picturePaths,
        type,
        authorId: req.user.userId,
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Erreur 500.' });
  }
}

// Lire les post à partir de l'Id utilisateur
exports.showAllByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Récupérer les posts de l'utilisateur spécifié
    const userPosts = await prisma.post.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    res.status(200).json(userPosts);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ error: 'Erreur 500.' });
  }
}

// Modification d'un post
exports.editPost = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    // Vérifiez si le post existe
    const existingPost = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingPost) {
      return res.status(404).json({ error: 'publication non trouvé.' });
    }

    if (!validator.isLength(title, { max: 10 }) || !validator.isAlphanumeric(title.replace(/\s/g, ''))) {
      return res.status(400).json({ error: 'Le titre doit avoir au maximum 10 mots sans caractères spéciaux.' });
    }

    if (!validator.isLength(description, { max: 30 })) {
      return res.status(400).json({ error: 'La description doit avoir au maximum 30 mots.' });
    }

    // Mettez à jour le texte du post dans la base de données
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        description,
      },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Erreur lors du chargement de la publication.' });
  }
}

// Supprimer un tweet
exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    // Vérifiez si le post existe
    const existingPost = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingPost) {
      return res.status(404).json({ error: 'publication non trouvé.' });
    }

    // Supprimez le post de la base de données
    await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: 'La publication a été supprimer avec succes.' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Erreur 500.' });
  }
};
