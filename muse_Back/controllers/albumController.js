const pool = require('../db');

const uploadAlbum = (albumData, callback) => {
  const { ANAME, ADATE, ATEXT, AIMG, AGENRE, ID } = albumData;

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

const getAlbum =(req, res) => {

  const sql=`SELECT * FROM album where aid='${req.body.aid}'`;
  pool.getConnection((error,connection)=>{
      if (error) {
          return res.status(500).json({ error: '조회 실패' });
      }

      connection.query(sql,(error,result)=>{
          if(!error){
              console.log('조회된 앨범 데이터:', result);
              res.send(JSON.stringify(result));
              connection.release();
          }else{
              throw error
          }
      })

  })
};

const getMusics =(req, res) => {

  const sql=`SELECT * FROM music where aid='${req.body.aid}'`;
  pool.getConnection((error,connection)=>{
      if (error) {
          return res.status(500).json({ error: '조회 실패' });
      }

      connection.query(sql,(error,result)=>{
          if(!error){
              console.log('조회된 수록곡 데이터:', result);
              res.send(JSON.stringify(result));
              connection.release();
          }else{
              throw error
          }
      })

  })
};

const updateAlbum =(req, res) => {

  const sql=`SELECT * FROM music where aid='${req.body.aid}'`;
  pool.getConnection((error,connection)=>{
      if (error) {
          return res.status(500).json({ error: '조회 실패' });
      }

      connection.query(sql,(error,result)=>{
          if(!error){
              console.log('조회된 수록곡 데이터:', result);
              res.send(JSON.stringify(result));
              connection.release();
          }else{
              throw error
          }
      })

  })
};

const musicList =(req, res) => {

  const sql=`SELECT * FROM music where id='${req.body.uid}'`;
  pool.getConnection((error,connection)=>{
      if (error) {
          return res.status(500).json({ error: '조회 실패' });
      }

      connection.query(sql,(error,result)=>{
          if(!error){
              console.log('조회된 곡 데이터:', result);
              res.send(JSON.stringify(result));
              connection.release();
          }else{
              throw error
          }
      })

  })
};
module.exports = { 
  uploadAlbum,
  getAlbum,
  getMusics,
  updateAlbum,
  musicList
};
