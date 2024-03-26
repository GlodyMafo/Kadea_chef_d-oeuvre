// const { assert } = require('chai');
const assert = require ('assert')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');


const {signUpUser}=require('../Controllers/authenticationController.js')

describe('Fonction signUpUser', function() {
    it('devrait retourner les informations du nouvel utilisateur et du nouveau profil', async function() {
      const email = 'test@example.com';
      const username = 'testuser';
      const role = 'user';
      const password = 'password123';
  
      const { newUser, newProfile } = await signUpUser({
        body: {
          email,
          username,
          role,
          password,
        },
      });
  
      // Vérification de l'utilisateur créé
      assert(newUser).to.be.an('object');
      assert(newUser.email).to.equal(email);
      assert(newUser.username).to.equal(username);
      assert(newUser.role).to.equal(role);
  
      // Vérification du mot de passe haché
      const isPasswordHashed = await bcrypt.compare(password, newUser.password);
      assert(isPasswordHashed).to.be.true;
  
      // Vérification du profil créé
      assert(newProfile).to.be.an('object');
      assert(newProfile.userName).to.equal(username);
      assert(newProfile.profileImage).to.be.null;
      assert(newProfile.coverImage).to.be.null;
      assert(newProfile.biography).to.be.null;
      assert(newProfile.country).to.be.null;
    });
  
    it('devrait renvoyer une erreur si l\'utilisateur existe déjà', async function() {
      const email = 'test@example.com';
      const username = 'testuser';
      const role = 'user';
      const password = 'password123';
  
      // Simulation d'un utilisateur existant
      const existingUser = {
        email,
        username,
        role,
        password: await bcrypt.hash(password, 10),
      };
  
      const response = await signUpUser({
        body: {
          email,
          username,
          role,
          password,
        },
      });
  
      assert(response.status).to.equal(400);
      assert(response.body.error).to.equal('L\'adresse Email ou le Nom d\'utilisateur sont déjà utilisés');
    });
  
    it('devrait renvoyer une erreur en cas de problème de validation', async function() {
      const response = await signUpUser({
        body: {},
      });
  
      assert(response.status).to.equal(400);
      assert(response.body.error).to.be.an('array');
    });
  });



