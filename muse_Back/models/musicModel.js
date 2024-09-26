const connection = require('../database');

// 모든 음악 조회
const getAllMusics = (callback) => {
  connection.query('SELECT * FROM music', (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// 특정 음악 조회
const getMusicByIdFromDb = (musicId, callback) => {
  connection.query('SELECT * FROM music WHERE id = ?', [musicId], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// 음악 추가
const addMusic = (music, callback) => {
  const { name, genre, albumId } = music;
  connection.query('INSERT INTO music (name, genre, album_id) VALUES (?, ?, ?)', [name, genre, albumId], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = {
  getAllMusics,
  getMusicByIdFromDb,
  addMusic
};
