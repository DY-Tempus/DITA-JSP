const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

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

  albumController.uploadAlbum(albumData, (err, result) => {
    if (err) {
      res.status(500).json({ error: '앨범 업로드 실패' });
    } else {
      res.json({ message: '앨범 업로드 성공', result });
    }
  });
});

router
.post('/detail', (req, res) => {
  console.log('post /api/album/detail 요청이 호출되었습니다.');  // 로그 추가
  albumController.getAlbum(req,res)
})
.post('/musics', (req, res) => {
  console.log('post /api/album/musics 요청이 호출되었습니다.');  // 로그 추가
  albumController.getMusics(req,res)
})

module.exports = router;