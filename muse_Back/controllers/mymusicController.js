const pool = require('../db');


const getMyMusic =(req, res) => {
    const sql=`select * from music where id='${req.body.uid}'`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 음악 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
};

const getMyAlbum =(req, res) => {
    const sql=`SELECT * from album where id='${req.body.uid}'`;
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

module.exports = { 
    getMyMusic,
    getMyAlbum
 };
