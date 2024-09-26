const express = require('express');
const app = express()
const userCon = require('../controllers/userController');

// 사용자 목록 조회 API
app.get('/', (req, res) => {
  console.log('GET /api/users 요청이 호출되었습니다.');  // 로그 추가
  userCon.getUsers(req, res);  // userController의 getUsers 함수 호출
});

// 사용자 추가 API
app.post('/', (req, res) => {
  console.log('POST /api/users 요청이 호출되었습니다.');  // 로그 추가
  userCon.createUser(req, res);  // userController의 createUser 함수 호출
});

module.exports = app;
