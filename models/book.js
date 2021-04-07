const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: { type: String },
  authors: [{ type: String }],
  description: { type: String },
  image: { type: String },
  link: { type: String },
  categories: [{ type: String }],
  googleId: { type: String },
  date: { type: Date, default: Date.now },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;