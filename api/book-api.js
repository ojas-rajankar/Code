const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let books = [];
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/book", (req, res) => {
  const book = req.body;

  console.log(book);
  books.push(book);

  res.send("Book is added");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/book/:isbn", (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  // Searching books for the isbn
  for (let book of books) {
    if (book.isbn === isbn) {
      res.json(book);
      return;
    }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send("Book not found");
});

app.delete("/book/:isbn", (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  // Remove item from the books array
  books = books.filter((i) => {
    if (i.isbn !== isbn) {
      return true;
    }
    return false;
  });

  res.send("Book is deleted");
});

app.post('/book/:isbn', (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;
  const newBook = req.body;

  // Remove item from the books array
  for (let i = 0; i < books.length; i++) {
      let book = books[i]
      if (book.isbn === isbn) {
          books[i] = newBook;
      }
  }

  res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello World from ${port}`));
