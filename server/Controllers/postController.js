const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Lire tous les post

exports.showPost = async (req, res) => {
  try {
    // Récupération de tous les tweets de la base de données

    const posts = await prisma.post.findMany();

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'erreur 500.' });
  }
}
// Créer un nouveau post

exports.createPost = async (req, res) => {

  const { title, description, type, author} = req.body;
  const picturePaths = req.files.map(file => file.path);

//   console.log(picturePaths);

  try {

    
  
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        image : picturePaths,
        type,
        include : {
          author:true
        }
      
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

    // Mettez à jour le texte du post dans la base de données
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        description
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

//faire un like

// exports.likePost= async (req, res) => {
//   const { id } = req.params;
//   const { action } = req.body; // 'like' ou 'unlike'

//   try {
//     // Récupérer le post spécifié
//     const post = await prisma.post.findUnique({
//       where: {
//         id: parseInt(id),
//       },
//     });

//     if (!post) {
//       return res.status(404).json({ error: 'Tweet non trouvé.' });
//     }

//     // Mettre à jour le nombre de likes en fonction de l'action
//     let updatedPost;
//     if (action === 'like') {
//       updatedPost = await prisma.post.update({
//         where: {
//           id: parseInt(id),
//         },
//         data: {
//           likes: {
//             increment: 1,
//           },
//         },
//       });
//     } else if (action === 'unlike') {
//       updatedPost = await prisma.post.update({
//         where: {
//           id: parseInt(id),
//         },
//         data: {
//           likes: {
//             decrement: 1,
//           },
//         },
//       });
//     } else {
//       return res.status(400).json({ error: 'action action invalide.' });
//     }

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error('Error updating likes:', error);
//     res.status(500).json({ error: 'Erreur de chargement des likes.' });
//   }
// }
