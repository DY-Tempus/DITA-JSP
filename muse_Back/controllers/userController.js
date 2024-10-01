const pool = require('../db.js');
const express = require('express');
const app=express()


const getUsers=(req,res)=>{
    
    const sql=`SELECT * FROM user`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '사용자 조회 실패' });
        }

        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('조회된 사용자 데이터:', result);
                res.send(JSON.stringify(result));
                connection.release();
            }else{
                throw error
            }
        })

    })
}
module.exports = {
    getUsers,
};