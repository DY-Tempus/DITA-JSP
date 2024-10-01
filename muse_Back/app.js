const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const uploadRouter = require('./routers/uploadRouter');
const userRouter = require('./routers/userRouter'); // 사용자 라우터 추가

const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// 파일 업로드 미들웨어 설정
app.use(fileUpload());

// JSON 데이터 처리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 파일 업로드 라우터 연결
app.use('/api/music', uploadRouter);

// 사용자 라우터 연결
app.use('/api/users', userRouter); // 사용자 API 라우터 연결

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
