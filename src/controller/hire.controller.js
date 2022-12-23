const hireModel = require('../model/hires.model');
const {failed, success}= require('../helper/response');

const userController = {
  // method
  listjoinuser: (req, res) => {
    const id = req.params.id;
    hireModel
      .selectjoinUser(id)
      .then((result) => {
        success(res, result, 'success','get all user succes')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','get all user failed')
      })
  },
  listjoinper: (req, res) => {
    const id = req.params.id;
    hireModel
      .selectjoinPer(id)
      .then((result) => {
        success(res, result, 'success','get all user succes')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','get all user failed')
      })
  },
  list: (req, res) => {
    hireModel
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
    hireModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id user success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id user failed')
      })
  },

  destroy: (req, res) => {
    hireModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  insert: (req, res) => {
    const { projek, emailper, phone, deskripsi, iduser, idperekrut, nama } = req.body
    hireModel
      .store(  projek, emailper, phone, deskripsi, iduser, idperekrut, nama)
      .then((result) => {
        res.json('Account added successfully')
      })
      .catch((err) => {
        res.json(err)
      })
  },
}

module.exports = userController
