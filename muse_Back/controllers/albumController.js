const db = require('../db');

const uploadAlbum = (albumData, callback) => {
  const { ANAME, ADATE, ATEXT, AIMG, AGENRE, ID } = albumData;

  db.getConnection((err, connection) => {
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

module.exports = { uploadAlbum };
