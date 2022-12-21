
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');

const userRouter= require ("./src/router/user.routes");
const perusahaanRouter= require ("./src/router/perusahaan.routes")
const hireRouter= require ("./src/router/hires.routes");
const porto= require ("./src/router/porto.routes");
const pengalaman= require ("./src/router/pengalaman.route");

const app=express();
app.use(express.static('public_gambar'))
app.use(bodyParser.json());
app.use(helmet({ crossOriginResourcePolicy: false }))
app.use(xss())
app.use(cors())

app.use(userRouter)
app.use(perusahaanRouter)
app.use(hireRouter)
app.use(porto)
app.use(pengalaman)

app.listen(process.env.PORT1,()=>{
    console.log('Service Running on port 3001');
})