const express = require('express');
const db = require('../db');  // 커넥션 풀 사용
const router = express.Router();

// 음악 파일 업로드 라우터
router.post('/upload', (req, res) => {
    const { title, genre, lyrics } = req.body;
    const musicFile = req.files.music;

    if (!musicFile) {
        return res.status(400).json({ message: '음악 파일이 필요합니다.' });
    }

    const query = 'INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID) VALUES (?, ?, ?, ?, ?)';
    db.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        connection.query(query, [title, musicFile.data, lyrics, genre, 'rang'], (err, result) => {
            connection.release();
            if (err) {
                return res.status(500).json({ message: '음악 업로드 실패' });
            }

            res.json({ message: '음악 업로드 성공', musicId: result.insertId });
        });
    });
});

module.exports = router;
