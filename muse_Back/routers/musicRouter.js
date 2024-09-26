const express = require('express');
const app = express()
const musicCon = require('../controllers/musicController');

// 모든 음악 조회
app.get('/', musicCon.getMusics);

// 특정 음악 조회
app.get('/:musicId', musicCon.getMusicById);

// 음악 추가
app.post('/', musicCon.createMusic);

module.exports = app;
