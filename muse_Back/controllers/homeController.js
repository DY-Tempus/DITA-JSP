const pool = require('../db');

const getRecent =(req, res) => {

    const sql=`SELECT * FROM music ORDER BY mDATE DESC LIMIT 15`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 최근앨범 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
};
const getMusic =(req, res) => {
    const sql=`SELECT M.* FROM MUSIC M JOIN USER U ON (M.MGENRE = U.GENRE1 OR M.MGENRE = U.GENRE2) WHERE U.ID = '${req.body.uid}' LIMIT 15`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
};
const getArtist =(req, res) => {
    const sql=`SELECT U.*, COUNT(M.MID) AS Music_Count FROM USER U JOIN MUSIC M ON U.ID = M.ID WHERE M.MGENRE = (SELECT GENRE1 FROM USER WHERE ID = '${req.body.uid}') OR M.MGENRE = (SELECT GENRE2 FROM USER WHERE ID = '${req.body.uid}') GROUP BY U.ID ORDER BY Music_Count DESC limit 15`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 선호아티스트 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
};
const getAlbum =(req, res) => {
    const sql=`SELECT A.* FROM ALBUM A JOIN USER U ON (A.AGENRE = U.GENRE1 OR A.AGENRE = U.GENRE2) WHERE U.ID = '${req.body.uid}' LIMIT 15`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 추천앨범 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
};

module.exports = { 
    getRecent,
    getMusic,
    getArtist,
    getAlbum,
 };
