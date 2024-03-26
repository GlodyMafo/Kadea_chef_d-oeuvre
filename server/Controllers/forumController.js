
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// QUESTION
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

// Endpoint pour obtenir toutes les questions
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
  
  // Endpoint pour obtenir une question par son ID
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
  
  // Endpoint pour mettre à jour une question
  exports.updateQuestion = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const updatedQuestion = await prisma.question.update({
        where: {
          id: parseInt(id),
        },
        data: {
          title,
          content,
        },
      });
      res.json(updatedQuestion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de mettre à jour la question' });
    }
  };
  
  // Endpoint pour supprimer une question
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


// REPONSE
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

// Endpoint pour obtenir toutes les réponses
exports.showReplies = async (req, res) => {
    try {
      const answers = await prisma.answer.findMany();
      res.json(answers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Impossible de récupérer les réponses' });
    }
  };
  
  // Endpoint pour obtenir une réponse par son ID
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
  
  // Endpoint pour mettre à jour une réponse
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
  
  // Endpoint pour supprimer une réponse
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
  


