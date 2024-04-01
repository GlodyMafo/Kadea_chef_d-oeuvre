// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'yahoo',
//     auth: {
//         user: 'glodymafo@yahoo.com',
//         pass: 'UPEMBA2024AFRIKULTURE'
//     }
// });

// async function sendConfirmationEmail(email) {
//     try {
//         const mailOptions = {
//             from: ' "Afrikulture" <glodymafo@yahoo.com>',
//             to: email,
//             subject: 'Confirmation d\'inscription',
//             text: 'Merci pour votre inscription àAfrikulture ! Veuillez confirmer votre adresse email en cliquant sur ce lien : http://exemple.com/confirmation'
//         };

//         await transporter.sendMail(mailOptions);
//         console.log('Email de confirmation envoyé avec succès !');
//     } catch (error) {
//         console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
//     }
// }



// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const { OAuth2Client } = require('google-auth-library');

// const oauth2Client = new OAuth2Client(
//     '176894470911-verh0fmu4h95oq106sj0uu6iqvqurc3m.apps.googleusercontent.com',
//     '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',
//     'http://localhost:8000' // URL de redirection autorisée
// );

// async function sendEmail(email) {
//     try {
//         // Générer un jeton d'accès OAuth2
//         const { token } = await oauth2Client.getToken({
//             code: '4/0AeaYSHALwNf8vYrD82KN1I3NeBgC3Mf3NXWswPGOnM-ibc3ReFzaa2o0bIGeGG9Z4y361w',
//         });
//         oauth2Client.setCredentials(token);

//         // Créer un transporteur SMTP avec authentification OAuth2
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'glodymafokis@gmail.com',
//                 clientId: '176894470911-verh0fmu4h95oq106sj0uu6iqvqurc3m.apps.googleusercontent.com',
//                 clientSecret: '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',
//                 refreshToken: '4/0AeaYSHALwNf8vYrD82KN1I3NeBgC3Mf3NXWswPGOnM-ibc3ReFzaa2o0bIGeGG9Z4y361w',
//                 accessToken: token.access_token,
//             }
//         });

//         // Options de l'email
//         const mailOptions = {
//             from: 'glodymafokis@gmail.com',
//             to:email,
//             subject: 'Confirmation de création de compte',
//             text: 'This is a test email sent using Nodemailer with OAuth2 authentication.'
//         };

//         // Envoyer l'email
//         const result = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', result);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// module.exports = {
//     sendEmail
// };

// // Appel de la fonction d'envoi d'email
// ;

