const express=require('express');
const port = 8000;
const app=express();

const loginRoute=require( 'server/Routes/loginRoute.js');
const signupRoute=require('server/Routes/signupRoute.js');



app.use('/login',loginRoute);

app.use('/sign', signupRoute)

app.listen(port, ()=>{
    console.log(`Notre application tourne sur le port : http://localhost:${port}`);
})
