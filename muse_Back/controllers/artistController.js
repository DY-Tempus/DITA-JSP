const pool = require('../db');

const getArtist=(req,res)=>{
    
    const sql=`SELECT * FROM user where id='${req.body.id}'`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '아티스트 조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 아티스트 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
}

const getAlbum=(req,res)=>{
    
    const sql=`SELECT * FROM album where id='${req.body.id}' ORDER BY aDATE DESC`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
}

const getTrack=(req,res)=>{
    
    const sql=`SELECT * FROM music where id='${req.body.id}' ORDER BY mDATE DESC`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
}

module.exports = {
    getArtist,
    getAlbum,
    getTrack
};