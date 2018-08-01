const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
    required: true,
  },
  pages: Number,
  year: Number,
  publisher: String,
});

module.exports = mongoose.model('Book', bookSchema);
