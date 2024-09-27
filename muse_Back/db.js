const mysql = require('mysql2');
const dbInfo={
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydb',
  connectionLimit: 5
};

const pool=mysql.createPool(dbInfo);

function getConnection(callback){
  pool.getConnection((err,connection)=>{
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    callback(err, connection);
  })
}


module.exports = {getConnection};