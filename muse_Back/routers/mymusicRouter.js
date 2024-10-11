const express = require('express');
const app = express()
const homeCon = require('../controllers/mymusicController');

app
.post('/album', (req, res) => {
    console.log('post /api/mymusic/album 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getMyAlbum(req,res)
})
.post('/music', (req, res) => {
    console.log('post /api/mymusic/music 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getMyMusic(req,res)
})

module.exports = app;
