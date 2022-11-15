require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail,insert } = require('../controller/hire.controller')
// const{register, login}=require('../controller/auth.controller')
// const{isAdmin, isCustomer}= require('../middleware/authorization')
// const jwtAuth = require ('../middleware/jwtAuth.js');
// const upload =require ('../middleware/upload');
// const remove= require('../middleware/deletefile')

const router = express.Router()


router
  .get('/hire', list)
  .get('/hire/:id', detail)
  .post('/hire/tambah', insert)
  .delete('/hire/:id', destroy)



module.exports = router
