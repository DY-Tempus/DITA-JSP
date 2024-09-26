const albumModel = require('../models/albumModel');

// 모든 앨범 조회
const getAlbums = (req, res) => {
  albumModel.getAllAlbums((err, albums) => {
    if (err) {
      return res.status(500).json({ error: '앨범 조회 실패' });
    }
    res.json(albums);
  });
};

// 특정 앨범 조회
const getAlbumById = (req, res) => {
  const { albumId } = req.params;
  albumModel.getAlbumByIdFromDb(albumId, (err, album) => {
    if (err) {
      return res.status(500).json({ error: '앨범 조회 실패' });
    }
    res.json(album);
  });
};

// 앨범 추가
const createAlbum = (req, res) => {
  const album = req.body;
  albumModel.addAlbum(album, (err, result) => {
    if (err) {
      return res.status(500).json({ error: '앨범 추가 실패' });
    }
    res.json({ message: '앨범 추가 성공', result });
  });
};

module.exports = {
  getAlbums,
  getAlbumById,
  createAlbum
};
