const express = require('express');
const port = 8000;
const app = express();
var cors = require('cors')

const loginRoute = require('./Routes/loginRoute.js');
const signupRoute = require('./Routes/signupRoute.js');
const usersRoute = require('./Routes/userRoute.js')
const profilRoute = require('./Routes/profilRoute.js');
const postRoute = require('./Routes/postRoute.js');
const questionRoute = require('./Routes/questionRoute.js');
const responseRoute = require('./Routes/responseRoute.js')
const ConnectedRoute = require('./Routes/connectedRoute.js')
// const midleWare = require ('./Routes/midleware/midleware.js')

app.use(express.json());

app.use(cors())





app.use('/login', loginRoute);

app.use('/me', ConnectedRoute);

app.use('/sign', signupRoute);

app.use('/user', usersRoute);

app.use('/profil', profilRoute);

app.use('/post', postRoute);

app.use('/question', questionRoute);

app.use('/response', responseRoute);


// app.get('/protected', midleWare, (req, res) => {
//     res.json({ message: 'Contenu protégé' });
//   });



app.listen(port, () => {
    console.log(`Notre application tourne sur le port : http://localhost:${port}`);
})
