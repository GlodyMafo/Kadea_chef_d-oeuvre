const jwt = require('jsonwebtoken');

// middleware/authenticateToken.js



// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, 'your_secret_key', (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };






// function authMiddleware(req, res, next) {

//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ message: 'Token non fourni. Authentification échouée.' });
//     }

//     try {
      
//         const decodedToken = jwt.verify(token, 'your_secret_key');

//         req.user = decodedToken;

//         next();
//     } catch (error) {
    
//         return res.status(401).json({ message: 'Token invalide. Authentification échouée.' });
//     }
// }

// module.exports = authMiddleware;


// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// // Middleware pour vérifier les autorisations de l'utilisateur
// const authorizeRole = (role) => {
//   return (req, res, next) => {
//     if (req.user.role !== role) return res.sendStatus(403);
//     next();
//   };
// };


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