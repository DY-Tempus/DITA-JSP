const pool = require('../db');

const addView =(req, res) => {

    const sql=`update music set mviews=mviews+1 where mid=${req.body.mid}`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: ' 실패' });
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

const addLike =(req, res) => {

    const sql=`update music set mlikes=mlikes+1 where mid=${req.body.mid}`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '실패' });
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
    addView,
    addLike
 };
