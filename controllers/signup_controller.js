const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const UserModel = require('../models/user_model');
const jwt = require('jsonwebtoken');


router.post('/signup',(req,res)=>{
    console.log(req.body);
    let check=0;
    let err='';
    let username = (req.body.username); //.replace(/\s+/g, '')
    let password = req.body.password;
    let confirm_password = req.body.confirm_password;
    let email = req.body.email; 
    let status = req.body.status;

    if(password!=confirm_password) res.send('Please enter password again!');

    pattern_username = /^([a-zA-Z\sàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬđĐèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆìÌỉỈĩĨíÍịỊòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰỳỲỷỶỹỸýÝỵỴ]){1,30}$/
    subject_username = username;

    pattern_email = /^([a-z,A-Z,0-9]){3,}\@gmail.(com|co)$/
    subject_email = email;
    (pattern_username.test(subject_username)) ? check=check+1: err+='Please enter username again!'+'\n';
    (pattern_email.test(subject_email)) ? check=check+1: err+='Please enter email again!';

    if(check==2)
    {
        const saltRounds= 10;

        bcrypt.genSalt(saltRounds,(err, salt)=>{
            bcrypt.hash(password, salt,(err,hash)=>{
                object = [
                    {
                        username: username,
                        password: hash,
                        email: email,
                        status: status,
                    }
                ]
                UserModel.create(object,(err,data)=>{
                    (err) ? res.send('err add user'):res.send('ok');
                });
            });
        });
    }
    else
    {
        res.send(err);
        err=''
        check=0;
    }
});

module.exports = router; 