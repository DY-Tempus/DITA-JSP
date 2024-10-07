const express = require('express');
const app = express()
const searchCon= require('../controllers/searchController')

app.post('/name', (req, res) => {
  console.log('POST /api/search/:name 요청이 호출되었습니다.');  
  searchCon.searchName(req, res);  
})
.post('/mname', (req, res) => {
    console.log('POST /api/search/:mname 요청이 호출되었습니다.');  
    searchCon.searchMusic(req, res);  
})
.post('/aname', (req, res) => {
    console.log('POST /api/search/:aname 요청이 호출되었습니다.');  
    searchCon.searchAlbum(req, res);  
})


module.exports = app;
