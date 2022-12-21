const pengalamanModel = require('../model/pengalaman.model');
const {failed, success}= require('../helper/response');
const cloudinary = require('../helper/cloudinary')

const userController = {
  // method
  listjoin: (req, res) => {
    const id = req.params.id;
    pengalamanModel
      .selectjoin(id)
      .then((result) => {
        success(res, result, 'success','get all user succes')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','get all user failed')
      })
  },
  list: (req, res) => {
    pengalamanModel
      .selectAll()
      .then((result) => {
        success(res, result, 'success','get all user succes')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','get all user failed')
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    pengalamanModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id user success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id user failed')
      })
  },

  insert: async (req, res) => {
    try {
      // image
      // tangkap data dari body
      const { posisi,namaper, tgl, deskripsi,iduser } = req.body

      const data = {
        posisi,
        namaper,
        tgl,
        deskripsi,
        iduser,
      }
      pengalamanModel.insert(data).then((result) => {
        success(res, data, result, 'success', ' success add recipe')
      }).catch((err) => {
        failed(res, err.message, 'failed', 'failed add recipe')
      })
    } catch (err) {
      failed(res, err.message, 'failed', 'internal server error')
    }
  },

  
  destroy: (req, res) => {
    pengalamanModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  },
}

module.exports = userController
