import axios from "axios";

export default {

    // Searches books
    
    searchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    // Adds and saves a book to user's bookshelf

    addBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    // retrieves saved books

    savedBooks: function() {
    return axios.get("/api/saved");
    },
    
    // deletes book

    deleteBook: function(id) {
        return axios.delete("/api/saved/" + id);
    },
};