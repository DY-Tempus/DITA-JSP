const express = require('express');
const app = express()
const userCon= require('../controllers/userController')

// 사용자 목록 조회 API
app.get('/', (req, res) => {
  console.log('GET /api/users 요청이 호출되었습니다.');  // 로그 추가
  userCon.getUsers(req, res);  // userController의 getUsers 함수 호출
});


app.post('/signin', (req, res) => {
  console.log('POST /api/users/signin 요청이 호출되었습니다.');  // 로그 추가
  userCon.signIn(req, res);  // userController의 createUser 함수 호출
});

// 사용자 추가 API
app.post('/signup',(req, res) => {
  console.log('POST /api/users/signup 요청이 호출되었습니다.');  // 로그 추가
  userCon.signUp(req, res);  
});

app.post('/idcheck',(req, res) => {
  console.log('POST /api/users/idcheck 요청이 호출되었습니다.');  // 로그 추가
  userCon.idCheck(req, res);  
});

module.exports = app;
