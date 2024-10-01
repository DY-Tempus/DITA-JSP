const express = require('express');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const db = require('./database'); // MySQL DB 연결
const app = express();
const port = 3000;
const uploadDir = path.join(__dirname, 'uploads'); // 업로드된 파일 저장 디렉토리

// CORS 설정
app.use(cors());

// 파일 업로드를 위한 미들웨어
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 파일 저장 디렉토리 존재 확인 및 생성
const fs = require('fs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// API 라우터 연결
const userRouter = require('./routers/userRouter'); // 예시로 사용자 라우터 추가
app.use('/api/users', userRouter); // 사용자 라우터 설정

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

// 프론트엔드 빌드 파일 제공
app.use(express.static(path.join(__dirname, '../muse/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../muse/build/index.html'));
});

// 음악 업로드 API
app.post('/api/music/upload', (req, res) => {
  const { title, genre, lyrics } = req.body;
  const musicFile = req.files.music;
  const imageFile = req.files.image;
  const userID = 'rang'; // 임시로 'rang'을 사용

  if (!musicFile || !imageFile) {
    return res.status(400).json({ error: '음악 또는 이미지 파일이 없습니다.' });
  }

  const musicPath = path.join(uploadDir, musicFile.name);
  const imagePath = path.join(uploadDir, imageFile.name);

  // 음악 파일 저장
  musicFile.mv(musicPath, (err) => {
    if (err) {
      console.error('음악 파일 저장 실패:', err);
      return res.status(500).json({ error: '음악 파일 저장 실패' });
    }

    // 이미지 파일 저장
    imageFile.mv(imagePath, (err) => {
      if (err) {
        console.error('이미지 파일 저장 실패:', err);
        return res.status(500).json({ error: '이미지 파일 저장 실패' });
      }

      // MySQL 쿼리를 이용해 데이터를 삽입 (producer, album, copyright은 DB에 저장되지 않음)
      db.query('INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID) VALUES (?, ?, ?, ?, ?)',
        [title, musicPath, lyrics, genre, userID], (err, result) => {
          if (err) {
            console.error('DB 삽입 오류:', err);
            return res.status(500).json({ error: '음악 업로드 실패' });
          }
          res.json({ message: '음악 업로드 성공' });
        });
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../muse/build/index.html'));
});
