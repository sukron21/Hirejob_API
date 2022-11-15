require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, update, detailname, register,login } = require('../controller/perusahaan.controller')
// const{register, login}=require('../controller/auth.controller')
// const{isAdmin, isCustomer}= require('../middleware/authorization')
// const jwtAuth = require ('../middleware/jwtAuth.js');
// const upload =require ('../middleware/upload');
// const remove= require('../middleware/deletefile')

const router = express.Router()


router
  .get('/perusahaan', list)
  .get('/perusahaan/:id', detail)
  .get('/perusahaan/:username', detailname)
//   .post('/user/tambah', insert)
  .put('/perusahaan/:id',update)
  .delete('/perusahaan/:id', destroy)
//   .delete('/user/:id',remove, destroy)
   .post('/perusahaan/register' , register)
   .post('/perusahaan/login',login)

module.exports = router
