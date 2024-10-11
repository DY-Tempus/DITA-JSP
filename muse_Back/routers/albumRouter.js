const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

// 앨범 업로드 라우트
router.post('/upload', (req, res) => {
  const { title, genre, detail, image, ID } = req.body;

  if (!ID) {
    return res.status(400).json({ message: '사용자 ID가 필요합니다.' });
  }

  if (!image) {
    return res.status(400).json({ message: '앨범 이미지가 필요합니다.' });
  }

  const imageBuffer = Buffer.from(image.split(',')[1], 'base64'); // base64를 Buffer로 변환

  const albumData = {
    ANAME: title,
    ADATE: new Date(),
    ATEXT: detail,
    AIMG: imageBuffer, // 변환된 이미지 데이터를 BLOB으로 저장
    AGENRE: genre,
    ID: ID  // 사용자 ID
  };

  albumController.uploadAlbum(albumData, (err, result) => {
    if (err) {
      res.status(500).json({ error: '앨범 업로드 실패' });
    } else {
      res.json({ message: '앨범 업로드 성공', result });
    }
  });
});

// 앨범 조회 라우트
router.post('/detail', (req, res) => {
  albumController.getAlbum(req, res);
});

// 곡 목록 조회 라우트
router.post('/musics', (req, res) => {
  albumController.getMusics(req, res);
});

// 유저별 음악 목록 조회 라우트
router.post('/musiclist', (req, res) => {
  albumController.musicList(req, res);
});

module.exports = router;
