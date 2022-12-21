const db = require('../config/db')
const portoModel = {
  // router 
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM portofolio', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectjoin: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from portofolio left join users on users.id = portofolio.iduser
       where iduser = ${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM portofolio where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },

  
  insert:({namaapp,linkrepo, type, photo,photo_pub_id_porto,photo_url_porto,photo_secure_url_porto,iduser})=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into portofolio (namaapp,linkrepo, type,photo,photo_pub_id_porto,photo_url_porto,photo_secure_url_porto,iduser) 
        values
        ('${namaapp}','${linkrepo}','${type}','${photo}','${photo_pub_id_porto}','${photo_url_porto}','${photo_secure_url_porto}',${iduser})`,(err,res)=>{
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
       ` UPDATE portofolio SET
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


}
module.exports = portoModel