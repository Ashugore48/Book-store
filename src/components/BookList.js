// BookList.js
import React from "react";

const BookList = ({ books, setSelectedBook }) => {
  return (
    <>
    <p className="text-left mb-4 px-28 text-white text-3xl">More books</p>
      <div className="w-full flex flex-col items-center py-5">
        <div className="book-list flex flex-wrap justify-center max-w-screen-xl gap-16">
          {books.map((book, index) => (
            <div
              className="w-40 rounded-lg"
              key={`${book.id}_${index}`}
              onClick={() => setSelectedBook(book)}
            >
              <img
                className="w-full rounded-sm"
                src={book.volumeInfo.imageLinks?.thumbnail || ""}
                alt={book.volumeInfo.title}
              />
              {/* <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
