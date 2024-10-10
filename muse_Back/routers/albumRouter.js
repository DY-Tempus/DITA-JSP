const express = require('express');
const router = express.Router();
const { uploadAlbum } = require('../controllers/albumController');

router.post('/album/upload', (req, res) => {
  const { name, date, text, genre } = req.body;
  const albumFile = req.files.album; // 파일 업로드
  const albumData = {
    ANAME: name,
    ADATE: date,
    ATEXT: text,
    AIMG: albumFile.data, // 파일 데이터 저장
    AGENRE: genre,
    ID: '임시사용자ID' // 추후 로그인 기능이 추가되면 변경
  };

  uploadAlbum(albumData, (err, result) => {
    if (err) {
      res.status(500).json({ error: '앨범 업로드 실패' });
    } else {
      res.json({ message: '앨범 업로드 성공', result });
    }
  });
});

module.exports = router;