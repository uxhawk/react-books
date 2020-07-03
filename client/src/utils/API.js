import axios from "axios";

export default {
  // Gets all posts
  // getPosts: function() {
  //   return axios.get("/api/posts");
  // },
  // // Gets the post with the given id
  // getPost: function(id) {
  //   return axios.get("/api/posts/" + id);
  // },
  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },
  // // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", {
      title: bookData.title,
      author: bookData.author,
      description: bookData.description,
      smallThumbnail: bookData.smallThumbnail,
      infoLink: bookData.infoLink,
    });
  },
  searchForBooks: function(searchString) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&download=epub&key=AIzaSyDkBRoBfAczEqSC1zVbTZsz4HeadIRAULA`);
  }
};
