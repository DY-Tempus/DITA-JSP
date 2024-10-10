const express = require('express');
const db = require('../db');  // 커넥션 풀 사용
const router = express.Router();

// 음악 파일 업로드 라우터 (기존 기능 유지)
router.post('/upload', (req, res) => {
    const { title, genre, lyrics, userId } = req.body;
    const musicFile = req.files.music;
    const imageFile = req.files.image;

    // 현재 날짜 계산
    const currentDate = new Date().toISOString().split('T')[0];

    // 디버깅: 받은 사용자 ID와 기타 정보 확인
    console.log("Received userId:", userId);
    console.log("Received title:", title);
    console.log("Received genre:", genre);
    console.log("Received lyrics:", lyrics);

    if (!musicFile || !imageFile) {
        return res.status(400).json({ message: '음악 및 이미지 파일이 필요합니다.' });
    }

    // SQL 쿼리: 이미지와 현재 날짜도 함께 삽입
    const query = 'INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID, MIMG, MDATE) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        connection.query(query, [title, musicFile.data, lyrics, genre, userId, imageFile.data, currentDate], (err, result) => {
            connection.release();

            if (err) {
                console.error('음악 업로드 실패:', err);
                return res.status(500).json({ message: '음악 업로드 실패' });
            }

            console.log('음악 업로드 성공:', result);
            res.json({ message: '음악 업로드 성공', musicId: result.insertId });
        });
    });
});

// 앨범 업로드 라우터 (추가된 기능)
router.post('/albumUpload', (req, res) => {
    const { title, producer, genre, detail, option, songIds, userId } = req.body;
    const albumImage = req.files ? req.files.image : null; // 앨범 이미지 파일 처리

    // 사용자 ID가 없는 경우 처리
    if (!userId) {
        return res.status(400).json({ message: '사용자 ID가 필요합니다.' });
    }

    // 앨범 정보 삽입 쿼리
    const insertAlbumQuery = 'INSERT INTO album (ANAME, ADATE, ATEXT, AIMG, ALIKES, AVIEWS, ARATE, ID, AGENRE) VALUES (?, NOW(), ?, ?, 0, 0, 0, ?, ?)';

    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        // 앨범 정보 삽입
        connection.query(insertAlbumQuery, [title, detail, albumImage ? albumImage.data : null, userId, genre], (err, albumResult) => {
            if (err) {
                connection.release();
                console.error('앨범 업로드 실패:', err);
                return res.status(500).json({ message: '앨범 업로드 실패' });
            }

            const newAlbumId = albumResult.insertId; // 새로 생성된 앨범 ID

            // 선택된 곡들의 AID 업데이트 (앨범 ID를 할당)
            const updateSongsQuery = 'UPDATE music SET AID = ? WHERE MID IN (?)';
            connection.query(updateSongsQuery, [newAlbumId, songIds], (err, result) => {
                connection.release();

                if (err) {
                    console.error('노래 업데이트 실패:', err);
                    return res.status(500).json({ message: '노래 업데이트 실패' });
                }

                res.json({ message: '앨범 및 노래 업데이트 성공' });
            });
        });
    });
});

module.exports = router;