const express = require('express');
const router = express.Router();
const profileCon = require('../controllers/profileController'); // 컨트롤러에서 getGenres 함수 가져오기

// 프로필 이미지 업로드 경로
router.post('/uploadProfileImage', profileCon.uploadProfileImage);

// 프로필 정보 업데이트 경로
router.post('/updateProfile', profileCon.updateProfile);

// 장르 데이터 가져오기 경로
router.get('/genres', profileCon.getGenres);  // getGenres 함수 추가

module.exports = router;
