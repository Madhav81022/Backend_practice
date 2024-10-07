const express = require('express')
require('dotenv').config();

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Hello Madhav!");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login on the console panel</h1>')
})

app.get('/login',(req,res)=>{
  res.send('<p>This is login console</p>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})