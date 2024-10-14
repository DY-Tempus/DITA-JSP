const express = require('express');
const app = express()
const fakeCon = require('../controllers/fakeController');

// 현재 음악 조회
app
.post('/view', (req, res) => {
    console.log('GET /api/fake/view 요청이 호출되었습니다.');  // 로그 추가
    fakeCon.addView(req, res); 
})
.post('/like', (req, res) => {
    console.log('GET /api/fake/like 요청이 호출되었습니다.');  // 로그 추가
    fakeCon.addLike(req, res); 
})



module.exports = app;
