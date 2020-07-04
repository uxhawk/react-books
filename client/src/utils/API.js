import axios from "axios";

export default {
  // Gets all posts
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", {
      title: bookData.title,
      author: bookData.author,
      description: bookData.description,
      smallThumbnail: bookData.smallThumbnail,
      infoLink: bookData.infoLink,
    });
  },
   deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  searchForBooks: function(searchString) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&download=epub&key=AIzaSyDkBRoBfAczEqSC1zVbTZsz4HeadIRAULA`);
  }
};
