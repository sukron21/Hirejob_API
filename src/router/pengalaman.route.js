require('dotenv').config()
// deklare exprees
const express = require('express')
const { list, destroy, detail, insert, listjoin} = require('../controller/pengalaman.controller')
const upload =require ('../middleware/upload');

const router = express.Router()


router
  .get('/pengalaman', list)
  .get('/pengalaman/join/:id', listjoin)
  .get('/pengalaman/:id', detail)
//   .post('/user/tambah', insert)
  .post('/pengalaman',insert)
  .delete('/pengalaman/:id', destroy)

module.exports = router
