const express = require('express');
const app = express()
const homeCon = require('../controllers/homeController');

app
.post('/recent', (req, res) => {
    console.log('post /api/home/recent 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getRecent(req,res)
})
.post('/prefermusic', (req, res) => {
    console.log('post /api/home/prefermusic 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getMusic(req,res)
})
.post('/preferartist', (req, res) => {
    console.log('post /api/home/preferartist 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getArtist(req,res)
})
.post('/preferalbum', (req, res) => {
    console.log('post /api/home/preferalblum 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getAlbum(req,res)
})
.post('/myalbum', (req, res) => {
    console.log('post /api/home/myalbum 요청이 호출되었습니다.');  // 로그 추가
    homeCon.getMyAlbum(req,res)
})

module.exports = app;
