import axios from "axios";

export default {

    // Search books
    searchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    // Adds (saves) a book to user's bookshelf
    addBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    // Gets saved books
    savedBooks: function() {
    return axios.get("/api/saved");
    },
    
    // Deletes book
    deleteBook: function(id) {
        return axios.delete("/api/saved/" + id);
    },
};