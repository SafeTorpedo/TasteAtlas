const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//We need to have one connection.js where we will connect to mongo atlas via mongoose

app.listen(3080, ()=>{console.log("Listening on http://localhost:3080/")})