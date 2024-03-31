const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
// require('dotenv').config();

// CREATION DE COMPTE

exports.signUpUser = async (req, res) => {
    const { email, username, role, password } = req.body;

    try {
      
        if (!email || !username || !password) {
            return res.status(400).json({ error: 'Veuillez fournir une adresse email, un nom d\'utilisateur et un mot de passe.' });
        }

     
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Veuillez fournir une adresse email valide.' });
        }

        
        if (username.length > 8) {
            return res.status(400).json({ error: 'Le nom d\'utilisateur ne peut pas dépasser 8 lettres.' });
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'L\'adresse Email ou le Nom d\'utilisateur sont déjà utilisés' });
        }

     
        const existingUsername = await prisma.user.findUnique({
            where: {
                username,
            },
        });

        if (existingUsername) {
            return res.status(400).json({ error: 'Le nom d\'utilisateur est déjà utilisé.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                role,
                password: hashedPassword
            },
        });

        // Création d'un nouveau profil lié à l'utilisateur nouvellement créé
      if (['ADMIN', 'ARTIST', 'CURATOR'].includes(role)) {await prisma.profile.create({
            data: {
                userName: newUser.username,
                user: {
                    connect: {
                        id: newUser.id, 
                    },
                },
                profileImage: null,
                coverImage: null,
                biography: null,
                country: null,
            },
        })};

        
        res.status(201).json({ newUser, role });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Il y a eu une erreur à l\'inscription veuillez ressayer' });
    }
};


// CONNEXION

exports.logInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
     
        if (!email || !password) {
            return res.status(400).json({ error: 'Veuillez fournir une adresse email et un mot de passe.' });
        }

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

    
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        const token = jwt.sign({ role: user.role, userId: user.id }, "my_token");
        
        res.json({ token, user});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Il y a eu une erreur lors votre connexion veuillez ressayer' });
    }
}
