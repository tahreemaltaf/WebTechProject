import React from 'react';

const BooksSection = () => {
  return (
    <div className="books-section-container">
      <div className="books-title">
        <h2>Featured Books</h2>
      </div>
      <div className="book-container">
        {/* Book 1 */}
        <div className="book-box">
          <a href="/pdfs/book1.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/pic1.jpg" alt="Art of Being Alone" className="book-image" />
            <div className="book-info">
              <h3>Art of Being Alone</h3>
              <p>Price: PKR 0</p>
            </div>
          </a>
        </div>
        {/* Book 2 */}
        <div className="book-box">
          <a href="/pdfs/book2.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/pic2.jpg" alt="Eleanor Oliphant Is Completely Fine" className="book-image" />
            <div className="book-info">
              <h3>Eleanor Oliphant Is Completely Fine</h3>
              <p>Price: PKR 0</p>
            </div>
          </a>
        </div>
        {/* Book 3 */}
        <div className="book-box">
          <a href="/pdfs/book3.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/pic3.jpg" alt="The Tragedy of Macbeth" className="book-image" />
            <div className="book-info">
              <h3>The Tragedy of Macbeth</h3>
              <p>Price: PKR 0</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
