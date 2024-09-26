// app.js에서 database.js를 import (최상단에 추가)
const db = require('./database');

const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호

// 미들웨어 설정
app.use(express.json()); // JSON 데이터 처리
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터 처리

// 기본 테스트 라우터
app.get('/', (req, res) => {
  res.send('Express 서버가 실행 중입니다.');
});

// API 라우터 연결
const userRouter = require('./routers/userRouter'); // 예시로 사용자 라우터 추가
app.use('/api/users', userRouter); // 사용자 라우터 설정

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
