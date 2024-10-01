const db = require('../db');

const uploadMusic = (musicData, callback) => {
  const { MNAME, MFILE, MLYRICS, MGENRE, ID } = musicData;

  db.getConnection((err, connection) => {
    if (err) return callback(err);

    const query = 'INSERT INTO music (MNAME, MFILE, MLYRICS, MGENRE, ID) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [MNAME, MFILE, MLYRICS, MGENRE, ID], (err, results) => {
      connection.release(); // 연결 해제
      if (err) {
        console.error('음악 업로드 실패:', err);
        callback(err);
      } else {
        console.log('음악 업로드 성공:', results);
        callback(null, results);
      }
    });
  });
};

module.exports = { uploadMusic };
