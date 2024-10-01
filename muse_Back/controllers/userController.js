const db = require('../db');

const createUser = (userData, callback) => {
  const { ID, PASSWORD, EMAIL, NAME, GENRE1, GENRE2 } = userData;

  db.getConnection((err, connection) => {
    if (err) return callback(err);

    const query = 'INSERT INTO user (ID, PASSWORD, EMAIL, NAME, GENRE1, GENRE2) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [ID, PASSWORD, EMAIL, NAME, GENRE1, GENRE2], (err, results) => {
      connection.release(); // 연결 해제
      if (err) {
        console.error('사용자 생성 실패:', err);
        callback(err);
      } else {
        console.log('사용자 생성 성공:', results);
        callback(null, results);
      }
    });
  });
};

module.exports = { createUser };
