const express = require('express')
const Userroute = express.Router();
const UserCtrll = require('../controllers/userCtrl')

Userroute.post('/user/register',UserCtrll.registration)
Userroute.post('/user/signIn',UserCtrll.signIn)
Userroute.post('/user/login',UserCtrll.loginRequire)

module.exports = Userroute