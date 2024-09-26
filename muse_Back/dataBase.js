const mysql = require('mysql2');
const dbInfo={
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydb',
};

const connection = mysql.createConnection(dbInfo);

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
  } else {
    console.log('MySQL에 성공적으로 연결되었습니다.');
  }
});

module.exports = connection;
