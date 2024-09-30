const userModel = require('../models/userModel');

// 모든 사용자 조회
const getUsers = (req, res) => {
  
  usermodel.getAllUsers((err, users) => {    
    if (err) {
      return res.status(500).json({ error: '사용자 조회 실패' });
    }
    console.log('조회된 사용자 데이터:', users);  // 조회된 데이터를 로그로 확인
    res.json(users);  // 가져온 사용자 데이터를 클라이언트에 반환
  });
};

// 사용자 추가
const createUser = (req, res) => {
  const user = req.body;
  addUser(user, (err, result) => {
    if (err) {
      return res.status(500).json({ error: '사용자 추가 실패' });
    }
    res.json({ message: '사용자 추가 성공', result });
  });
};

module.exports = {
  getUsers,
  createUser,
};
