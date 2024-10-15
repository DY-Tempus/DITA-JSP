const pool = require('../db.js');
const express = require('express');
const app=express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

const searchName=(req,res)=>{
    let str=req.body.searchstr
    const sql=`SELECT * FROM user where name like '%${str}%'`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return //res.status(500).json({ error: '사용자 조회 실패' });
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

const searchMusic=(req,res)=>{
    let str=req.body.searchstr
    const sql=`SELECT * FROM music where mname like '%${str}%`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return //res.status(500).json({ error: '음악 조회 실패' });
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

const searchAlbum=(req,res)=>{
    let str=req.body.searchstr
    const sql=`SELECT * FROM album where aname like '%${str}%`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return //res.status(500).json({ error: '앨범 조회 실패' });
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
    searchName,
    searchMusic,
    searchAlbum,
};