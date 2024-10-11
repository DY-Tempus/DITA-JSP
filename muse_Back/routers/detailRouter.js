const express = require('express');
const app = express()
const musicCon = require('../controllers/detailController');

// 현재 음악 조회
app
.post('/music', (req, res) => {
    console.log('GET /api/detail/music 요청이 호출되었습니다.');  // 로그 추가
    musicCon.getMusic(req, res); 
})
.post('/comment', (req, res) => {
    console.log('GET /api/detail/comment 요청이 호출되었습니다.');  // 로그 추가
    musicCon.getComment(req, res); 
})

// 특정 음악 조회



module.exports = app;
