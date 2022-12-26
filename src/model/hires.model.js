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
  selectjoinUser: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from hires left join users on users.id = hires.iduser
      left join perusahaans on perusahaans.id = hires.idperekrut
       where idperekrut = ${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  selectjoinPer: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`select * from hires left join perusahaans on perusahaans.id = hires.idperekrut
       where idperekrut = ${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
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
  store: (projek, emailper, phone, deskripsi, iduser, idperekrut, nama) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO hires ( projek, emailper, phone, deskripsi , iduser, idperekrut, nama)
            VALUES
            ( '${projek}','${emailper}','${phone}','${deskripsi}','${iduser}','${idperekrut}','${nama}')
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