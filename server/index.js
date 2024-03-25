const express = require('express');
const port = 8000;
const app = express();
var cors = require('cors')

const loginRoute = require('./Routes/loginRoute.js');
const signupRoute = require('./Routes/signupRoute.js');
const profilRoute = require('./Routes/profilRoute.js');
const postRoute = require('./Routes/postRoute.js');

app.use(express.json());

app.use(cors())



app.use('/post', postRoute);

app.use('/login', loginRoute);

app.use('/sign', signupRoute);

app.use('/profil', profilRoute);



app.listen(port, () => {
    console.log(`Notre application tourne sur le port : http://localhost:${port}`);
})
