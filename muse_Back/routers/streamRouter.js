const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL pool 연결

// MID를 기준으로 음악 파일 스트리밍
router.get('/stream/:id', (req, res) => {
    const musicId = req.params.id; // URL에서 음악 ID 추출

    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).send('DB 연결 실패');
        }

        const query = 'SELECT MFILE FROM MUSIC WHERE MID = ?'; // MID에 해당하는 음악 파일 조회
        connection.query(query, [musicId], (err, results) => {
            connection.release(); // 연결 반환

            if (err) {
                console.error('DB 쿼리 오류:', err);
                return res.status(500).send('DB 쿼리 오류');
            }

            if (results.length === 0) {
                return res.status(404).send('음악 파일을 찾을 수 없습니다.');
            }

            const musicFile = results[0].MFILE;

            // Content-Type 설정 (mp3로 가정)
            res.setHeader('Content-Type', 'audio/mpeg');
            res.send(musicFile); // 음악 파일 전송
        });
    });
});

// 음악 상세 정보 가져오기
router.get('/detail/:id', (req, res) => {
    const musicId = req.params.id;

    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).send('DB 연결 실패');
        }

        const query = 'SELECT MNAME as title, MGENRE as genre, ID as artist FROM MUSIC WHERE MID = ?';
        connection.query(query, [musicId], (err, results) => {
            connection.release();

            if (err) {
                console.error('DB 쿼리 오류:', err);
                return res.status(500).send('DB 쿼리 오류');
            }

            if (results.length === 0) {
                return res.status(404).send('음악 정보를 찾을 수 없습니다.');
            }

            res.json(results[0]);
        });
    });
});

// MID를 기준으로 음악 이미지 가져오기
router.get('/image/:id', (req, res) => {
    const musicId = req.params.id; // URL에서 음악 ID 추출

    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).send('DB 연결 실패');
        }

        const query = 'SELECT MIMG FROM MUSIC WHERE MID = ?'; // MID에 해당하는 이미지 파일 조회
        connection.query(query, [musicId], (err, results) => {
            connection.release(); // 연결 반환

            if (err) {
                console.error('DB 쿼리 오류:', err);
                return res.status(500).send('DB 쿼리 오류');
            }

            if (results.length === 0) {
                return res.status(404).send('이미지 파일을 찾을 수 없습니다.');
            }

            const imageFile = results[0].MIMG;

            // Content-Type 설정 (jpeg로 가정)
            res.setHeader('Content-Type', 'image/jpeg');
            res.send(imageFile); // 이미지 파일 전송
        });
    });
});

module.exports = router;
