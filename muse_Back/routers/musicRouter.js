const express = require('express');
const router = express.Router();
const { getMusics, createMusic, getMusicById } = require('../controllers/musicController');

// 모든 음악 조회
router.get('/', getMusics);

// 특정 음악 조회
router.get('/:musicId', getMusicById);

// 음악 추가
router.post('/', createMusic);

module.exports = router;
