const { getAllMusics, addMusic, getMusicByIdFromDb } = require('../models/musicModel');

// 모든 음악 조회
const getMusics = (req, res) => {
  getAllMusics((err, musics) => {
    if (err) {
      return res.status(500).json({ error: '음악 조회 실패' });
    }
    res.json(musics);
  });
};

// 특정 음악 조회
const getMusicById = (req, res) => {
  const { musicId } = req.params;
  getMusicByIdFromDb(musicId, (err, music) => {
    if (err) {
      return res.status(500).json({ error: '음악 조회 실패' });
    }
    res.json(music);
  });
};

// 음악 추가
const createMusic = (req, res) => {
  const music = req.body;
  addMusic(music, (err, result) => {
    if (err) {
      return res.status(500).json({ error: '음악 추가 실패' });
    }
    res.json({ message: '음악 추가 성공', result });
  });
};

module.exports = {
  getMusics,
  getMusicById,
  createMusic
};
