const db = require('../config/db')
const perusahaanModel = {
  // router list
  listAll: (limit, offset) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM perusahaans LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  }),
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM perusahaans', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM perusahaans where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  
  register:({username,email,nama_perusahaan,jabatan, phone, password})=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into perusahaans (username,email,nama_perusahaan,jabatan, phone, password) 
        values
        ('${username}','${email}', '${nama_perusahaan}', '${jabatan}','${phone}'   ,'${password}')`,(err,res)=>{
            if (err) {
                reject(err)
              }
              resolve(res)
        })
    })
  }, 
  checkUsername:(username)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from perusahaans where username ilike '${username}'`, (err, result)=>{
        if (err) {
          reject(err)
        }
        resolve(result);
      })
    })
  },  
  updateAccount: (id,username, email,nama_perusahaan,jabatan,phone,password,bidang_perusahaan,kota,deskripsi,instragram,linkedin) => {
    return new Promise((resolve, reject) => {
      db.query(
       ` UPDATE perusahaans SET
        username = COALESCE ($1, username),
        email = COALESCE ($2, email),
        nama_perusahaan = COALESCE ($3, nama_perusahaan),
        jabatan = COALESCE ($4, jabatan),
        phone = COALESCE ($5, phone),
        password = COALESCE ($6, password),
        bidang_perusahaan = COALESCE ($7, bidang_perusahaan),
        kota = COALESCE ($8, kota),
        deskripsi = COALESCE ($9, deskripsi),
        instragram = COALESCE ($10, instragram),
        linkedin = COALESCE ($11, linkedin)    
        WHERE id = $12
        `,
        [username, email,nama_perusahaan,jabatan,phone,password,bidang_perusahaan,kota,deskripsi,instragram,linkedin, id],(err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
      })
    },
  
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM perusahaans WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  checkUEmail:(email)=>{
    return new Promise((resolve, reject)=>{
      db.query(`select * from perusahaans where email='${email}'`, (err, result)=>{
        if (err) {
          reject(err)
        }
        resolve(result);
      })
    })
  },  

}
module.exports = perusahaanModel