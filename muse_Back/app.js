const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const port = 3000;

const uploadRouter = require('./routers/uploadRouter');
const userRouter = require('./routers/userRouter');
const musicRouter=require('./routers/musicRouter');

// CORS 설정
app.use(cors());

// 파일 업로드 미들웨어 설정
app.use(fileUpload());

// JSON 데이터 처리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 서버 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

//라우터 연결 모음


app.use('/api/music', uploadRouter);
app.use('/api/user', userRouter);
app.use('/api/detail', musicRouter);



app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'muse/build/index.html'));
});