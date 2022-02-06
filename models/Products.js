const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Tile cannot be more than 40 char']
    },
    image: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [200, 'Tile cannot be more than 200 char']
    }
})

module.exports = mongoose?.models?.Products ||  mongoose.model('Products', productSchema);