const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Goi Databases
require('./database');

const index_controllers = require('./controllers/index_controller.js');
app.use('/',index_controllers);

app.get('/',(req,res)=>{
    res.send('Home!');
});

// app.get('/api',(req,res)=>{
//     res.send({sayHi: 'hello from server, nice to meet you!'})
// });

app.listen(process.env.PORT || 5000, ()=>{
    console.log('App listening on port 5000');
});
