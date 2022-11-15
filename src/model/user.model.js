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
  nameDetail: (username) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from users where username='${username}'`,
        (err, result) => {
          if (err) {
            reject(err)
          }
          resolve(result)
        })
    })
  },
  
  register:({username,email, phone, password})=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into users (username,email, phone, password) 
        values
        ('${username}','${email}','${phone}','${password}')`,(err,res)=>{
            if (err) {
                reject(err)
              }
              resolve(res)
        })
    })
  },  
  updateAccount: (id,username, email,phone,password,jobdesk,domisili,loker,diskripsi,instagram,linkedin) => {
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
        linkedin = COALESCE ($10, linkedin)  
        WHERE id = $11
        `,
        [username, email,phone, password, jobdesk,domisili, diskripsi,loker, instagram, linkedin, id],(err, res) => {
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