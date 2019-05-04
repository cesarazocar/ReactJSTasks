const express = require('express');
const morgan = require('morgan');

const path = require('path');

const{ mongoose } = require('./database');

const app = express();
//Settings 
app.set('port',process.env.PORT || 3000); 

//Middlewares (funciones que se ejecutan antes de que llegan las rutas)
app.use(morgan('dev'));
app.use(express.json()); // cada vez que llegue un dato al server confirmara si es json o no 

//Routes

app.use('/api/tasks',require('./routes/task.routes')); 

//Static files

app.use(express.static(path.join(__dirname,'public')));


//Starting the server


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});