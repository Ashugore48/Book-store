import React from 'react';

const BookDetails = ({ selectedBook }) => {
  if (!selectedBook) {
    return null;
  }

  return (
    <>
    <div className="book-details">
      {/* Display detailed book information here */}
      {/* Include "Read Now" and "More Info" buttons */}
    </div>
    </>
  );
};

export default BookDetails;
