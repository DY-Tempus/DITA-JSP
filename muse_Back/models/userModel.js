const connection = require('../database');

// 모든 사용자 조회
const getAllUsers = (callback) => {
  connection.query('SELECT * FROM user', (err, results) => {   // 테이블 이름이 'user'인지 확인
    if (err) {
      return callback(err);  // 에러 발생 시 에러 반환
    }
    callback(null, results);  // 조회된 결과를 컨트롤러로 전달
  });
};

const addUser = (user, callback) => {
  const { name, email } = user;
  connection.query(
    'INSERT INTO user (name, email) VALUES (?, ?)',
    [name, email],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};

module.exports = {
  getAllUsers,
  addUser,
};
