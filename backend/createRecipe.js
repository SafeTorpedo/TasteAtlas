const mongoose  = require('mongoose');

const Schema = mongoose.Schema({
    title: 'String',
    country: 'String',
    description: 'String',
    link: 'String'
},
{timestamp: true}
)

const createRecipe = mongoose.model('Post', Schema);

module.exports = createRecipe;