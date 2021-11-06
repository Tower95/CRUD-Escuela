'use strict'
require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

//require routes 
const alumno = require('./src/components/alumno');
const profesor = require('./src/components/profesor');
const grado = require('./src/components/grado');
const AlumnoGrado = require('./src/components/AlumnoGrado');



app.use('/alumno', alumno.router);
app.use('/profesor', profesor.router);
app.use('/grado', grado.router);
app.use('/alumnoGrado', AlumnoGrado.router);

console.log(process.env.TEST_ENV);
module.exports = app;