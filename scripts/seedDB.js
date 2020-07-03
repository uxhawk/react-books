const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Seveneves",
    author: "Neal Stephenson",
    description:
      "From the #1 New York Times bestselling author of Anathem, Reamde, and Cryptonomicon comes an exciting and thought-provoking science fiction epic—a grand story of annihilation and survival spanning five thousand years. What would happen if the world were ending? A catastrophic event renders the earth a ticking time bomb. In a feverish race against the inevitable, nations around the globe band together to devise an ambitious plan to ensure the survival of humanity far beyond our atmosphere, in outer space. But the complexities and unpredictability of human nature coupled with unforeseen challenges and dangers threaten the intrepid pioneers, until only a handful of survivors remain . . . Five thousand years later, their progeny—seven distinct races now three billion strong—embark on yet another audacious journey into the unknown . . . to an alien world utterly transformed by cataclysm and time: Earth. A writer of dazzling genius and imaginative vision, Neal Stephenson combines science, philosophy, technology, psychology, and literature in a magnificent work of speculative fiction that offers a portrait of a future that is both extraordinary and eerily recognizable. As he did in Anathem, Cryptonomicon, the Baroque Cycle, and Reamde, Stephenson explores some of our biggest ideas and perplexing challenges in a breathtaking saga that is daring, engrossing, and altogether brilliant.",
    publishedDate: "2015-05-19",
    smallThumbnail: "http://books.google.com/books/content?id=0VWdBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    infoLink: "https://play.google.com/store/books/details?id=0VWdBAAAQBAJ&source=gbs_api",
  },
  {
    title: "Frankenstein, or, The Modern Prometheus",
    author: "Mary Wollstonecraft Shelley",
    description:
      "Frankenstein was published in 1818, the work of a 21-year-old genius named Mary Shelley. Hundreds of movies, adaptations, and monster masks later, its reputation remains so lively that the title has become its own word in the English language. Victor Frankenstein, a scientist, discovers the secret of reanimating the dead. After he rejects his hideous creation, not even the farthest poles of the earth will keep his bitter monster from seeking an inhuman revenge. Inspired by a uniquely Romantic view of science’s possibilities, Shelley’s masterpiece ultimately wrestles with the hidden shadows of the human mind.",
    publishedDate: "1869",
    smallThumbnail: "http://books.google.com/books/content?id=2Zc3AAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    infoLink: "https://play.google.com/store/books/details?id=2Zc3AAAAYAAJ&source=gbs_api",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
