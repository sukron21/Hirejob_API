const db = require('../config/db')
const pengalamanModel = {
  // router 
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM pengalaman', (err, result) => {
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
      db.query(`select * from pengalaman left join users on users.id = pengalaman.iduser
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
      db.query(`SELECT * FROM pengalaman where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },

  
  insert:({posisi,namaper, tgl, deskripsi,iduser})=>{
    return new Promise((resolve,reject)=>{
        db.query(`insert into pengalaman (posisi,namaper, tgl,deskripsi,iduser) 
        values
        ('${posisi}','${namaper}','${tgl}','${deskripsi}','${iduser}')`,(err,res)=>{
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
       ` UPDATE pengalaman SET
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
module.exports = pengalamanModel