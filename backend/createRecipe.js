const mongoose  = require('mongoose');

const Schema = mongoose.Schema({
    user: 'String',
    title: 'String',
    country: 'String',
    description: 'String',
    link: 'String',
    category: 'String',
},
{timestamp: true}
)

const createRecipe = mongoose.model('Post', Schema);

module.exports = createRecipe;