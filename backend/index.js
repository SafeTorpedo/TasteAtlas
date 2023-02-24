const express = require('express');
const cors = require('cors');
const db = require('./connection')

const app = express();
app.use(cors());
app.use(express.json());

db().then(()=>{console.log("connected to cloud")})
.catch((err)=>{console.log(err)});


//We need to have one connection.js where we will connect to mongo atlas via mongoose

app.listen(3080, ()=>{console.log("Listening on http://localhost:3080/")})