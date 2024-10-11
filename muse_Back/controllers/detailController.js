const pool = require('../db');

const getMusic =(req, res) => {

    const sql=`SELECT mid, mname, mimg , mlyrics, name AS uname, COALESCE(aname, 'No Album') AS aname FROM music JOIN user ON music.ID=user.ID LEFT JOIN album ON music.aID=album.aID WHERE mid=${req.body.mid}`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '음악 조회 실패' });
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
const getComment =(req, res) => {

    const sql=`select * from comment where mid=${req.body.mid} order by cdate desc`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '음악 조회 실패' });
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

module.exports = { 
    getMusic,
    getComment
 };
