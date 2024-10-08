const express = require('express');
const db = require('../db');  // 커넥션 풀 사용
const router = express.Router();

// 음악 파일 업로드 라우터
router.post('/upload', (req, res) => {
    const { title, genre, lyrics } = req.body;
    const musicFile = req.files.music;
    const imageFile = req.files.image;
    const userId = req.session.userId;  // 세션에서 사용자 ID 가져오기 (로그인된 사용자)

    if (!userId) {
        return res.status(401).json({ message: '로그인이 필요합니다.' });
    }

    if (!musicFile || !imageFile) {
        return res.status(400).json({ message: '음악 및 이미지 파일이 필요합니다.' });
    }

    const query = 'INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID, MIMG, MDATE) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    db.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        connection.query(query, [title, musicFile.data, lyrics, genre, userId, imageFile.data], (err, result) => {
            connection.release();
            if (err) {
                return res.status(500).json({ message: '음악 업로드 실패' });
            }

            res.json({ message: '음악 업로드 성공', musicId: result.insertId });
        });
    });
});

// 사용자가 업로드한 노래 목록 가져오기
router.get('/mysongs', (req, res) => {
    const userId = req.session.userId;  // 세션에서 사용자 ID 가져오기 (로그인된 사용자)

    if (!userId) {
        return res.status(401).json({ message: '로그인이 필요합니다.' });
    }

    const query = 'SELECT MID, MNAME, MIMG, duration FROM MUSIC WHERE ID = ?';

    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        connection.query(query, [userId], (err, results) => {
            connection.release(); // 커넥션 반환

            if (err) {
                console.error('DB 쿼리 오류:', err);
                return res.status(500).json({ message: 'DB 쿼리 오류' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: '사용자가 업로드한 노래가 없습니다.' });
            }

            res.json(results); // 사용자 노래 목록 반환
        });
    });
});

// 앨범 생성 라우터
router.post('/create-album', (req, res) => {
    const { albumName, albumDescription, albumGenre, songIds } = req.body; // 앨범 정보와 선택된 노래들
    const userId = req.session.userId;  // 세션에서 사용자 ID 가져오기 (로그인된 사용자)

    if (!userId) {
        return res.status(401).json({ message: '로그인이 필요합니다.' });
    }

    if (!albumName || !songIds || songIds.length === 0) {
        return res.status(400).json({ message: '앨범 이름과 적어도 하나의 노래가 필요합니다.' });
    }

    // 트랜잭션 시작
    db.getConnection((err, connection) => {
        if (err) {
            console.error('DB 연결 실패:', err);
            return res.status(500).json({ message: 'DB 연결 실패' });
        }

        connection.beginTransaction((err) => {
            if (err) {
                connection.release();
                return res.status(500).json({ message: '트랜잭션 시작 실패' });
            }

            // 앨범 정보를 앨범 테이블에 삽입
            const albumQuery = 'INSERT INTO album (ANAME, ADATE, ATEXT, AIMG, ALIKES, AVIEWS, ARATE, ID, AGENRE) VALUES (?, NOW(), ?, NULL, 0, 0, 0, ?, ?)';
            connection.query(albumQuery, [albumName, albumDescription, userId, albumGenre], (err, albumResult) => {
                if (err) {
                    return connection.rollback(() => {
                        connection.release();
                        return res.status(500).json({ message: '앨범 생성 실패' });
                    });
                }

                const albumId = albumResult.insertId;

                // 노래들을 앨범에 연결
                const songAlbumQuery = 'UPDATE music SET AID = ? WHERE MID IN (?)';
                connection.query(songAlbumQuery, [albumId, songIds], (err, result) => {
                    if (err) {
                        return connection.rollback(() => {
                            connection.release();
                            return res.status(500).json({ message: '앨범과 노래 연결 실패' });
                        });
                    }

                    // 트랜잭션 커밋
                    connection.commit((err) => {
                        connection.release();
                        if (err) {
                            return res.status(500).json({ message: '트랜잭션 커밋 실패' });
                        }

                        res.json({ message: '앨범 생성 성공', albumId });
                    });
                });
            });
        });
    });
});

module.exports = router;
