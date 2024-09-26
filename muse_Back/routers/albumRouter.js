const express = require('express');
const router = express.Router();
const { getAlbums, createAlbum, getAlbumById } = require('../controllers/albumController');

// 모든 앨범 조회
router.get('/', getAlbums);

// 특정 앨범 조회
router.get('/:albumId', getAlbumById);

// 앨범 추가
router.post('/', createAlbum);

module.exports = router;
