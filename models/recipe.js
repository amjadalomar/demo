const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    img: String,
    ingredients: Array,
    servings: String,
    cookTime: String,
    author: String,
    instructions: Array,
    tags: Array
});

module.exports = mongoose.model('Recipe', RecipeSchema);