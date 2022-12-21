require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, insert,listjoin} = require('../controller/porto.controller')
const upload =require ('../middleware/upload');

const router = express.Router()


router
  .get('/porto', list)
  .get('/porto/:id', detail)
  .get('/porto/join/:id', listjoin)
//   .post('/user/tambah', insert)
  .post('/porto',upload,insert)
  .delete('/porto/:id', destroy)

module.exports = router
