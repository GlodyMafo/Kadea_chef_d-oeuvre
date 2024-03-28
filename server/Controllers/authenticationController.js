const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// CREATION DE COMPTE

exports.signUpUser = async (req, res) => {
    const { email, username, role, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'L\'adresse Email ou le Nom d\'utilisateur sont déjà utilisés' });
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

        const newProfile = await prisma.profile.create({
            data: {

                userName: newUser.username,

                user: {
                    connect: {
                        id: newUser.id, // Lien vers l'utilisateur nouvellement créé
                    },
                },

                profileImage: null,
                coverImage: null,
                biography: null,
                country: null,

            },
        });

        res.status(201).json({ newUser, newProfile, role });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Il y a eu une erreur à l\'inscription veuillez ressayer' });
    }
};



// CONNEXION

exports.logInUser = async (req, res) => {
    const { email, password } = req.body;

    console.log({ email, password });

    try {
        // Vérification de l'existance de l'utilisateur

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        // Vérification le mot de passe

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        // Le jeton jwt

        const token = jwt.sign({ userId: user.id }, 'your_secret_key');

        res.status(200).json({ token, role: user.role });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Il y a eu une erreur lors votre connexion veuillez ressayer' });
    }
}