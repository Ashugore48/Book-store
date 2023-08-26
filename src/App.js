import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Titles from './components/Titles';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks('harry+potter');
    fetchBooks('Sherlock+Holmes');
  }, []);

  const fetchBooks = async (query) => {
    console.log('Fetching books for query:', query);
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      const fetchedBooks = data.items || [];
      setBooks((prevBooks) => [...prevBooks, ...fetchedBooks]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async () => {
    console.log('Search query:', searchQuery);
    if (searchQuery) {
      await fetchBooks(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <div className="App bg-zinc-900">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <Titles />
      <BookList books={books} setSelectedBook={setSelectedBook} />
      <BookDetails selectedBook={selectedBook} />
    </div>
  );
}

export default App;
