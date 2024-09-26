const connection = require('../database');

// 모든 앨범 조회
const getAllAlbums = (callback) => {
  connection.query('SELECT * FROM album', (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// 특정 앨범 조회
const getAlbumByIdFromDb = (albumId, callback) => {
  connection.query('SELECT * FROM album WHERE id = ?', [albumId], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// 앨범 추가
const addAlbum = (album, callback) => {
  const { name, genre, releaseDate } = album;
  connection.query('INSERT INTO album (name, genre, release_date) VALUES (?, ?, ?)', [name, genre, releaseDate], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = {
  getAllAlbums,
  getAlbumByIdFromDb,
  addAlbum
};
