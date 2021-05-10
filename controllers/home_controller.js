const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const bcrypt = require('bcrypt');
const UserModel = require('../models/user_model');

const jwt = require('jsonwebtoken');

router.post('/verify',(req,res)=>{
    console.log(req.body.token);
    serectKey = '@#$%';
    jwt.verify(req.body.token,serectKey,(err,data)=>{
        if(err)
        {
            console.log(err);
            res.send({kq:'err'});
        }
        else
        {
            console.log(data);
            res.send({kq:'ok'});
        }
    });
});

module.exports = router; 