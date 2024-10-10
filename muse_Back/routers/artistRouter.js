const express = require('express');
const app = express()
const artistCon = require('../controllers/artistController');

// 사용자 목록 조회 API
app
.post('/user', (req, res) => {
  console.log('GET /api/artist/user 요청이 호출되었습니다.');
  artistCon.getArtist(req, res);  
})
.post('/album', (req, res) => {
    console.log('GET /api/artist/album 요청이 호출되었습니다.');
    artistCon.getAlbum(req, res);  
})
.post('/track', (req, res) => {
    console.log('GET /api/artist/track 요청이 호출되었습니다.');
    artistCon.getTrack(req, res);  
})

module.exports = app;