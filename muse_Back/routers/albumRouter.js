const express = require('express');
const app = express()
const albemCon = require('../controllers/albumController');

// 모든 앨범 조회
app.get('/', albemCon.getAlbums);

// 특정 앨범 조회
app.get('/:albumId', albemCon.getAlbumById);

// 앨범 추가
app.post('/', albemCon.createAlbum);

module.exports = app;
