const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// 사용자 목록 조회 API
router.get('/', (req, res) => {
  console.log('GET /api/users 요청이 호출되었습니다.');  // 로그 추가
  getUsers(req, res);  // userController의 getUsers 함수 호출
});

// 사용자 추가 API
router.post('/', (req, res) => {
  console.log('POST /api/users 요청이 호출되었습니다.');  // 로그 추가
  createUser(req, res);  // userController의 createUser 함수 호출
});

module.exports = router;
