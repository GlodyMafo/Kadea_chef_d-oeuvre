const jwt = require('jsonwebtoken');

//Authentification de mon utilisateur
exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
      return res.status(401).json({ error: 'Vous devez être connecté pour accéder à cette ressource.' });
  }

  try {
      const decoded = jwt.verify(token,'my_token');
      req.user = {
        userId: decoded.userId,
        role:decoded.role
      }
    
      next();
  } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(401).json({ error: 'Session invalide, veuillez vous reconnecter.' });
  }
};

// Middleware pour vérifier les rôles autorisés
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
          return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à accéder à cette ressource.' });
      }
      next();
  };
};