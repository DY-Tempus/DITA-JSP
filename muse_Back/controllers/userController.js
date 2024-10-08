const pool = require('../db.js');
const express = require('express');
const app=express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

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

const signIn=(req,res)=>{
    console.log(req.body)
    const sql=`SELECT * FROM user where id='${req.body.uid}' and password='${req.body.upw}'`;
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

const signUp=(req,res)=>{
    let id=req.body.uid
    let pw=req.body.upw
    let email=req.body.email
    let name=req.body.uname
    let genre1=req.body.genre1
    let genre2=req.body.genre2

    
    
    
    const sql=`insert into user(id,password,email,name,genre1,genre2) values('${id}','${pw}','${email}','${name}','${genre1}','${genre2}')`;
    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '사용자 조회 실패' });
        }
        
        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('회원가입 사용자 데이터:', result);
                let str='{"result":true}'
                str=JSON.parse(str)
                res.send(str);
                connection.release();
            }else{
                throw error
            }
        })


    })
}

const idCheck=(req,res)=>{

    const sql=`select count(*) as count from user where id='${req.body.uid}'`;

    pool.getConnection((error,connection)=>{
        if (error) {
            return res.status(500).json({ error: '사용자 조회 실패' });
        }
        
        connection.query(sql,(error,result)=>{
            if(!error){
                console.log('데이터:', result);
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
    signIn,
    signUp,
    idCheck
};