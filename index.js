require('dotenv').config();
const express = require('express');
const cors= require('cors');
const fs = require('fs');
const app = express();
const port = 5500;
const heroes= JSON.parse(fs.readFileSync('heroes.json','utf-8'));

app.use(cors())

app.listen(port, () => {
    console.log(`The server is running at ${port}`)
});

app.get('/',(req,res)=>{
    res.json(heroes)
})
