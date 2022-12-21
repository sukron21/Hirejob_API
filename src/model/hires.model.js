const db = require('../config/db')
const hireModel = {
  // router list
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM hires', (err, result) => {
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
      db.query(`SELECT * FROM hires where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },    

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM hires WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  store: (projek, email, phone, deskripsi, iduser, idperekrut, nama) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO hires ( projek, email, phone, deskripsi , iduser, idperekrut, nama)
            VALUES
            ( '${projek}','${email}','${phone}','${deskripsi}','${iduser}','${idperekrut}','${nama}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      }
      )
    })
  },

}
module.exports = hireModel