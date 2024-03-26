
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// REPONSE

//repondre
exports.createReplie = async (req, res) => {
  const { content, authorId, questionId } = req.body;
  try {
    const answer = await prisma.answer.create({
      data: {
        content,
        authorId,
        questionId,
      },
    });
    res.json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Impossible de créer la réponse' });
  }
};

// Voir toutes les reponses
exports.showReplies = async (req, res) => {
    try {
      const answers = await prisma.answer.findMany();
      res.json(answers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de récupérer les réponses' });
    }
  };
  
  // voir une réponse par son ID
  exports.showReplieById = async (req, res) => {
    const { id } = req.params;
    try {
      const answer = await prisma.answer.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!answer) {
        return res.status(404).json({ error: 'Réponse non trouvée' });
      }
      res.json(answer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de récupérer la réponse' });
    }
  };
  
  // Modifier une reponse
  exports.updateReplie = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
      const updatedAnswer = await prisma.answer.update({
        where: {
          id: parseInt(id),
        },
        data: {
          content,
        },
      });
      res.json(updatedAnswer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de mettre à jour la réponse' });
    }
  };
  
  // supprimer une réponse
  exports.deleteReplie = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.answer.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Réponse supprimée avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de supprimer la réponse' });
    }
  };
  


