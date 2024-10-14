const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');


const uploadRouter = require('./routers/uploadRouter');
const streamRouter = require('./routers/streamRouter');
const userRouter = require('./routers/userRouter'); // 유저 라우터 추가
const detailRouter = require('./routers/detailRouter');
const homeRouter = require('./routers/homeRouter');
const artistRouter = require('./routers/artistRouter');
const albumRouter = require('./routers/albumRouter');
const mymusicRouter = require('./routers/mymusicRouter');
const profileRouter = require('./routers/profileRouter');
const fakeRouter = require('./routers/fakeRouter');



const path = require('path'); // path 모듈 추가

const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// 파일 업로드 미들웨어 설정 (최대 파일 크기 50MB로 설정)
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB로 파일 크기 제한
}));
// JSON 데이터 처리 (최대 크기 50MB로 설정)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// 라우터 연결

app.use('/api/music', uploadRouter);  // 업로드 관련 라우터(뮤직을 업로드랑 스트림으로 나눔)
app.use('/api/music', streamRouter);  // 스트리밍 관련 라우터
app.use('/api/user', userRouter);  // 유저 관련 라우터
app.use('/api/detail', detailRouter);
app.use('/api/home', homeRouter);
app.use('/api/artist',artistRouter);
app.use('/api/album',albumRouter);
app.use('/api/mymusic',mymusicRouter);
app.use('/api/profile', profileRouter);// 프로필 관련 라우팅 추가
app.use('/api/fake',fakeRouter);



// 서버 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
