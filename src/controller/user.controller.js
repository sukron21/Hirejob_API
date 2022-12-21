const userModel = require('../model/user.model');
const {succesWithToken,failed, success}= require('../helper/response');
const bcrypt= require('bcrypt');
const jwtToken = require('../helper/generateJWT');
const { listAll } = require('../model/user.model');
const cloudinary = require('../helper/cloudinary')

const userController = {
  // method
  listLimit: (req, res) => {
    const sort = req.query.sort
    const asc = req.query.asc
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const offset = (page - 1) * limit
    userModel
      .listAll(sort,asc,limit, offset)
      // console.log(listAll)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  list: (req, res) => {
    userModel
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
    userModel
      .selectDetail(id)
      .then((result) => {
        success(res, result, 'success','by id user success')
      })
      .catch((err) => {
        // res.json(err)
        failed(res, err.message,'failed','by id user failed')
      })
  },
  detailname: (req, res) => {
    const name = req.params.username
    const sort = req.query.sort
    const asc = req.query.asc
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const offset = (page - 1) * limit
    userModel
      .nameDetail(name,sort,asc,limit, offset)
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
    const { username, email,phone, password, jobdesk,domisili, diskripsi,loker, instagram,linkedin,skill} = req.body
    const data =
      {
       username,
       email,
       phone, 
       password, 
       jobdesk,
       domisili, 
       diskripsi,
       loker, 
       instagram,
       linkedin,
       skill,
       id:parseInt(id)
      }
    // console.log(data)
    userModel
      .updateAccount(data)
      .then((result) => {
        success(res,data, result, 'success','update user success')
      })
      .catch((err) => {
        failed(res, err.message,'failed','update user fail')
      })
  },
   updatePhoto:async (req, res) => {
    console.log('update recipe')
    const id = req.params.id
    // const image=req.file.filename
    // eslint-disable-next-line camelcase
    let photo
    if (req.file) {
      photo = await cloudinary.uploader.upload(req.file.path)
    }
    console.log(photo)
    const data = {
      id,
      photo,
      photo_pub_id: photo.public_id,
      photo_url: photo.url,
      photo_secure_url: photo.secure_url
    }
    userModel
      .updateAccountPhoto(data)
      .then((result) => {
        success(res, result, 'success','update photo success')
      })
      .catch((err) => {
        failed(res, err.message,'failed','photo fail')
      })
  },
  
  destroy: (req, res) => {
    userModel
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
    const{username,email,phone, password,}= req.body;
    // const image=req.file.filename
    bcrypt.hash(password,10,(err,hash)=>{
        if (err) {
            failed(res,err.message, 'failed','fail hash password')
          }
          const data={
            username,
            email,
            phone,
            password: hash,
            photo:"1",
            photo_pub_id: "sna73xrmlpaftrwtnzrz",
            photo_url: "http://res.cloudinary.com/dtqrvb5cj/image/upload/v1671588992/sna73xrmlpaftrwtnzrz.jpg",
            photo_secure_url: "https://res.cloudinary.com/dtqrvb5cj/image/upload/v1671588992/sna73xrmlpaftrwtnzrz.jpg"
          }
          userModel.register(data).then((result)=>{
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
  userModel.checkUEmail(email).then((result) => {
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

module.exports = userController
