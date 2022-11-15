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
  store: (projek, email, phone, deskripsi) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO hires ( projek, email, phone, deskripsi)
            VALUES
            ( '${projek}','${email}','${phone}','${deskripsi}')
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