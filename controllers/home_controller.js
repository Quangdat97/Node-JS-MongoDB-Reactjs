const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const UserModel = require('../models/user_model');
// const TokenModel = require('../models/token_models');
const jwt = require('jsonwebtoken');

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./cratch');
router.get('/',(req,res)=>{
    serectKey = '@#$%';
    jwt.verify(localStorage.getItem('token'),serectKey,(err,data)=>{
        if(err)
        {
            res.send({kq:'err'});
        }
        else
        {
            res.send({kq:'ok', account:localStorage.getItem('account')});
        }
    });
});

module.exports = router; 