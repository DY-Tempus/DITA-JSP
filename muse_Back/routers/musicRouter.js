const express = require('express');
const app = express()
const musicCon = require('../controllers/musicController');

// 현재 음악 조회
app.get('/', (req, res) => {
    console.log('GET /api/detail 요청이 호출되었습니다.');  // 로그 추가
    musicCon.getMusic(req, res); 
});

// 특정 음악 조회



module.exports = app;
