const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: { 
      type: Date
    },
  authors: [String],
  description: {
      type: String
  },
  image: {
      type: String
  },
  link: {
      type: String
  }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;