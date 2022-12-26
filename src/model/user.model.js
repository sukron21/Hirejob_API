const db = require('../config/db')
const userModel = {
  // router 
  listAll: (sort,asc,limit, offset) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users ORDER BY ${sort} ${asc} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  }),
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  DetailDom: (domisili) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users where domisili=${domisili}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  nameDetail: (username, sort,asc,limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from users where username ilike '%${username}%' ORDER BY ${sort} ${asc} LIMIT ${limit} OFFSET ${offset}`,
        (err, result) => {
          if (err) {
            reject(err)
          }
          resolve(result)
        })
    })
  },
  
  register:({username,email, phone, password,photo,photo_pub_id,photo_url,photo_secure_url})=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into users (username,email, phone, password,photo,photo_pub_id,photo_url,photo_secure_url) 
        values
        ('${username}','${email}','${phone}','${password}','${photo}','${photo_pub_id}','${photo_url}','${photo_secure_url}')`,(err,res)=>{
            if (err) {
                reject(err)
              }
              resolve(res)
        })
    })
  },  
  updateAccount: (data) => {
    console.log("model",data)
    return new Promise((resolve, reject) => {
      db.query(
       ` UPDATE users SET
        username = COALESCE ($1, username),
        email = COALESCE ($2, email),
        phone = COALESCE ($3, phone),
        password = COALESCE ($4, password),
        jobdesk = COALESCE ($5, jobdesk),
        domisili = COALESCE ($6, domisili),
        loker = COALESCE ($7, loker),
        diskripsi = COALESCE ($8, diskripsi),
        instagram = COALESCE ($9, instagram),
        linkedin = COALESCE ($10, linkedin),
        skill = COALESCE ($11, skill)
        WHERE id = $12
        `,
        [data.username, data.email, data.phone, data.password, data.jobdesk,data.domisili,data.loker, data.diskripsi,  data.instagram, data.linkedin, data.skill, data.id],(err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
      })
    },
    updateAccountPhoto: ({photo,photo_pub_id,photo_url,photo_secure_url,id}) => {
      return new Promise((resolve, reject) => {
        db.query(
         ` UPDATE users SET
          photo = COALESCE ($1, photo),
          photo_pub_id = COALESCE ($2, photo_pub_id),
          photo_url = COALESCE ($3, photo_url),
          photo_secure_url = COALESCE ($4, photo_secure_url) 
          WHERE id = $5
          `,
          [photo,photo_pub_id,photo_url,photo_secure_url,id],(err, res) => {
            if (err) {
              reject(err)
            }
            resolve(res)
          })
        })
      },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  checkUEmail:(email)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from users where email='${email}'`, (err, result)=>{
        if (err) {
          reject(err)
        }
        resolve(result);
      })
    })
  },  

}
module.exports = userModel