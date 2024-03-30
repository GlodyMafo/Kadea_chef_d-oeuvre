const jwt = require('jsonwebtoken');

// middleware/authenticateToken.js



const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};




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

module.exports = authMiddleware;


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