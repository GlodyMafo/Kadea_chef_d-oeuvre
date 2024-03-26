const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// QUESTIONS

//poser une question
exports.createMessage = async (req, res) => {
  const { content, authorId } = req.body;
  try {
    const question = await prisma.question.create({
      data: {
        content,
        authorId,
      },
    });
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Impossible de créer la question' });
  }
};

//  voir toutes mes questions dans la db
exports.showQuestions = async (req, res) => {
    try {
      const questions = await prisma.question.findMany({
        include: { answers: true },
      });
      res.json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de récupérer les questions' });
    }
  };
  
  // obtenir une question par son ID
  exports.showQuestionById = async (req, res) => {
    const { id } = req.params;
    try {
      const question = await prisma.question.findUnique({
        where: {
          id: parseInt(id),
        },
        include: { answers: true },
      });
      if (!question) {
        return res.status(404).json({ error: 'Question non trouvée' });
      }
      res.json(question);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de récupérer la question' });
    }
  };
  
  //  modification d'une question
  exports.updateQuestion = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
      const updatedQuestion = await prisma.question.update({
        where: {
          id: parseInt(id),
        },
        data: {
        
          content,
        },
      });
      res.json(updatedQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de mettre à jour la question' });
    }
  };
  
  // la suppression d'une question
  exports.deleteQuestion = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.question.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Question supprimée avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de supprimer la question' });
    }
  };
