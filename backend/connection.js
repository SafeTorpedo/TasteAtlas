const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@dbatlas.yi7qtvd.mongodb.net/dbatlas?retryWrites=true&w=majority`

const Connection = () =>{
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = Connection;