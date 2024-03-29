const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const UserModel = require('../models/user_model');
const jwt = require('jsonwebtoken');

router.post('/login',(req,res)=>{
    UserModel.find({username: {'$regex': req.body.username} })
    .exec((err,data)=>{
            if(err)
            {
                res.send(err);
            }
            else
            {
                if(data.length<1)
                {
                    res.send('Tên không tồn tại!');
                }
                else
                {
                    check_pass = bcrypt.compareSync(req.body.password, data[0].password);
                    if(check_pass)
                    {
                        payload = {
                                    username: data[0].username,
                                    password: data[0].password,
                                    status: data[0].status
                                }
                        serectKey = '@#$%';
                        token = jwt.sign(payload,serectKey, {expiresIn: 3600}); //expiresIn: 120 la thoi gian 120s

                        res.send({kq:'ok',account:(data[0].username).toUpperCase(),token:token});
                    } 
                    else
                    {
                        res.send('sai mat khau');
                    }
                }           
            }
    });
});

module.exports = router; 