const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// 음악 업로드 API
router.post('/upload', uploadController.uploadMusic);

module.exports = router;
