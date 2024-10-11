const pool = require('../db');

// 앨범 업로드 함수
const uploadAlbum = (albumData, callback) => {
  const { ANAME, ADATE, ATEXT, AIMG, AGENRE, ID } = albumData;

  if (!ID) {
    return callback(new Error('사용자 ID가 필요합니다.'));
  }

  pool.getConnection((err, connection) => {
    if (err) return callback(err);

    const query = 'INSERT INTO album (ANAME, ADATE, ATEXT, AIMG, AGENRE, ID) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [ANAME, ADATE, ATEXT, AIMG, AGENRE, ID], (err, results) => {
      connection.release(); // 연결 해제
      if (err) {
        console.error('앨범 업로드 실패:', err);
        callback(err);
      } else {
        console.log('앨범 업로드 성공:', results);
        callback(null, results);
      }
    });
  });
};

// 앨범 조회 함수
const getAlbum = (req, res) => {
  const albumId = req.body.aid; // 요청 본문에서 앨범 ID 가져오기

  if (!albumId) {
    return res.status(400).json({ message: '앨범 ID가 필요합니다.' });
  }

  const sql = `SELECT * FROM album WHERE aid = ?`;

  pool.getConnection((error, connection) => {
    if (error) {
      return res.status(500).json({ error: 'DB 연결 실패' });
    }

    connection.query(sql, [albumId], (error, result) => {
      connection.release();

      if (error) {
        return res.status(500).json({ error: '앨범 조회 실패' });
      }

      if (result.length === 0) {
        return res.status(404).json({ message: '앨범을 찾을 수 없습니다.' });
      }

      console.log('조회된 앨범 데이터:', result);
      res.json(result);
    });
  });
};

// 곡 목록 조회 함수
const getMusics = (req, res) => {
  const sql = `SELECT * FROM music WHERE aid = ?`;
  
  pool.getConnection((error, connection) => {
    if (error) {
      return res.status(500).json({ error: 'DB 연결 실패' });
    }

    connection.query(sql, [req.body.aid], (error, result) => {
      connection.release();
      
      if (error) {
        return res.status(500).json({ error: '곡 목록 조회 실패' });
      }

      console.log('조회된 곡 목록 데이터:', result);
      res.json(result);
    });
  });
};

// 유저별 음악 목록 조회 함수
const musicList = (req, res) => {
  const sql = `SELECT * FROM music WHERE id = ?`;

  pool.getConnection((error, connection) => {
    if (error) {
      return res.status(500).json({ error: 'DB 연결 실패' });
    }

    connection.query(sql, [req.body.uid], (error, result) => {
      connection.release();
      
      if (error) {
        return res.status(500).json({ error: '음악 목록 조회 실패' });
      }

      console.log('조회된 유저 음악 목록:', result);
      res.json(result);
    });
  });
};

// 함수들을 내보내기
module.exports = { 
  uploadAlbum,
  getAlbum,  // 앨범 조회 함수 추가
  getMusics,
  musicList
};
