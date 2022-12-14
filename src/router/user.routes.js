require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, update, detailname, register,login,listLimit,updatePhoto } = require('../controller/user.controller')
// const{register, login}=require('../controller/auth.controller')
// const{isAdmin, isCustomer}= require('../middleware/authorization')
// const jwtAuth = require ('../middleware/jwtAuth.js');
const upload =require ('../middleware/upload');
// const remove= require('../middleware/deletefile')

const router = express.Router()


router
  .get('/', list)
  .get('/user', listLimit)
  .get('/user/:id', detail)
  .get('/username/:username', detailname)
//   .post('/user/tambah', insert)
  .put('/user/:id',update)
  .put('/user/photo/:id',upload, updatePhoto)
  .delete('/user/:id', destroy)
   .post('/register' , register)
   .post('/login',login)

module.exports = router
