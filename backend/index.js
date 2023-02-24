const express = require('express');
const cors = require('cors');
const db = require('./connection')
const createRecipe = require('./createRecipe');

const app = express();
app.use(cors());
app.use(express.json());

db().then(()=>{console.log("connected to cloud")})
.catch((err)=>{console.log(err)});



//this will create new post
app.post("/recipe",async(req,res)=>{
    try {
        const {title, country, description, link} = req.body;
        const newRecipe = await createRecipe.create({title, country, description, link})
        res.json(newRecipe)
    } catch (err) {
        console.log(err.message)
    }
})

//We need to have one connection.js where we will connect to mongo atlas via mongoose

app.listen(3080, ()=>{console.log("Listening on http://localhost:3080/")})