const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  smallThumbnail: String,
  infoLink: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
