const perusahaanModel = require('../model/perusahaan.model');
const {succesWithToken,failed, success}= require('../helper/response');
const bcrypt= require('bcrypt');
const jwtToken = require('../helper/generateJWT')

const perusahaanController = {
  // method
  listLimit: (req, res) => {
    const limit = parseInt(req.query.limit) || 3
    const page = parseInt(req.query.page) || 1
    const offset = (page - 1) * limit
    perusahaanModel
      .listAll(limit, offset)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  list: (req, res) => {
    perusahaanModel
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
    perusahaanModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id user success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id user failed')
      })
  },
  listpagination: (req, res) => {
    const sort = req.query.sort
    const asc = req.query.asc
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const offset = (page - 1) * limit
    userModel
      .selectAllLimit(sort,asc,limit, offset)
      // console.log(listAll)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  detailname: (req, res) => {
    const name = req.params.username
    perusahaanModel
      .nameDetail(name)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  update: (req, res) => {
    const id = req.params.id
    // const image=req.file.filename
    // eslint-disable-next-line camelcase
    const { username, email,nama_perusahaan,jabatan,phone,password,bidang_perusahaan,kota,deskripsi,instragram,linkedin} = req.body
    perusahaanModel
      .updateAccount(id,username, email,nama_perusahaan,jabatan,phone,password,bidang_perusahaan,kota,deskripsi,instragram,linkedin)
      .then((result) => {
        res.json('Account Updated')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  destroy: (req, res) => {
    perusahaanModel
      .delete(req.params.id)
      .then((result) => {
        res.json('Account Deleted')
      })
      .catch((err) => {
        res.json(err)
      })
  },
  register:(req, res)=>{
    try{
    const{username,email,nama_perusahaan,jabatan, phone, password}= req.body;
    // const image=req.file.filename
    bcrypt.hash(password,10,(err,hash)=>{
        if (err) {
            failed(res,err.message, 'failed','fail hash password')
          }
          const data={
            username,
            email,
            nama_perusahaan,
            jabatan,
            phone,
            password: hash
          }
          perusahaanModel.register(data).then((result)=>{
            success(res, result, 'success','register success')
          }).catch((err)=>{
            failed(res, err.message,'failed','register fail')
          })

        })
    
    }catch(err){
        failed(res, err.message,'failed','internal server error')
        }
},
login: async (req, res) => {
  const {email, password} = req.body;
  perusahaanModel.checkUEmail(email).then((result) => {
      // console.log(res.rows[0]);
      const user = result.rows[0];
      if(result.rowCount > 0) {
          bcrypt.compare(password, result.rows[0].password).then(async (result) => {
              if(result) {
                  const token = await jwtToken({
                    email: user.email,
                      // level: user.level
                  })
                  // console.log(token);
                  // delete
                  succesWithToken(res, {token, data:user}, "success", "login success");
              } else {
                  // ketika password salah
                  failed(res, null, 'failed', 'username or password is wrong');
              }
          })
      } else {
          //ketika username salah
          failed(res, null, 'failed', 'username wrong');
      }
  }).catch((err) => {
      failed(res, err, 'failed', 'internal server error');
  })
}
}

module.exports = perusahaanController
