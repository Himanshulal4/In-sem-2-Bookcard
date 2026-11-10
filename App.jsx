import React from "react";
import "./App.css";

// Reusable BookCard component: receives title and author as props
function BookCard({ title, author }) {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>by {author}</p>
    </div>
  );
}

function App() {
  const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Wings of Fire", author: "A. P. J. Abdul Kalam" },
    { id: 3, title: "Atomic Habits", author: "James Clear" },
  ];

  return (
    <main className="app">
      <h1>My Book Collection</h1>
      <section className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
