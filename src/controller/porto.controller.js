const portoModel = require('../model/porto.model');
const {failed, success}= require('../helper/response');
const cloudinary = require('../helper/cloudinary')

const userController = {
  // method
  listjoin: (req, res) => {
    const id = req.params.id;
    portoModel
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
    portoModel
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
    portoModel
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
      const photo = await cloudinary.uploader.upload(req.file.path)
      // tangkap data dari body
      const { namaapp,linkrepo, type,iduser } = req.body

      const data = {
        namaapp,
        linkrepo,
        type,
        iduser,
        photo,
        photo_pub_id_porto: photo.public_id,
        photo_url_porto: photo.url,
        photo_secure_url_porto: photo.secure_url
      }
      portoModel.insert(data).then((result) => {
        success(res, data, result, 'success', ' success insert porto')
      }).catch((err) => {
        failed(res, err.message, 'failed', 'failed insert porto')
      })
    } catch (err) {
      failed(res, err.message, 'failed', 'internal server error')
    }
  },

  
  destroy: (req, res) => {
    portoModel
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
