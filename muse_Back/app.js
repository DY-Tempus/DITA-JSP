const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const uploadRouter = require('./routers/uploadRouter');
const streamRouter = require('./routers/streamRouter');
const userRouter = require('./routers/userRouter'); // 유저 라우터 추가
const detailRouter = require('./routers/detailRouter');

const path = require('path'); // path 모듈 추가

const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// 파일 업로드 미들웨어 설정
app.use(fileUpload());

// JSON 데이터 처리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 연결
app.use('/api/music', uploadRouter);  // 업로드 관련 라우터(뮤직을 업로드랑 스트림으로 나눔)
app.use('/api/music', streamRouter);  // 스트리밍 관련 라우터
app.use('/api/user', userRouter);  // 유저 관련 라우터
app.use('/api/detail', detailRouter);

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
