import React from 'react';
import './BookSectionPage.css'; // Add CSS for the page

const BookSectionPage = () => {
  return (
    <div className="book-section-page">
      <div className="book-section-overlay">
        <div className="book-section-header">
          <h1 className="main-heading">Book Section</h1>
          <h2 className="sub-heading">Every Genre You Love</h2>
        </div>
        <div className="books-grid">
          {/* Book 1 */}
          <div className="book-box">
            <a href="/pdfs/book4.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic4.jpg"
                alt="Book 1"
                className="book-image"
              />
              <div className="book-info">
                <h3>Atomic Habits</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 2 */}
          <div className="book-box">
            <a href="/pdfs/book5.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic5.jpg"
                alt="Book 2"
                className="book-image"
              />
              <div className="book-info">
                <h3>Its Not Supposed to Be This Way</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 3 */}
          <div className="book-box">
            <a href="/pdfs/book6.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic6.jpg"
                alt="Book 3"
                className="book-image"
              />
              <div className="book-info">
                <h3>Think and Grow Rich</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 4 */}
          <div className="book-box">
            <a href="/pdfs/book4.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic7.jpg"
                alt="Book 4"
                className="book-image"
              />
              <div className="book-info">
                <h3>I shouldn't Feel This Way</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 5 */}
          <div className="book-box">
            <a href="/pdfs/book7.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic8.jpg"
                alt="Book 5"
                className="book-image"
              />
              <div className="book-info">
                <h3>How To Heal Yourself When No-one Else Can</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 6 */}
          <div className="book-box">
            <a href="/pdfs/book6.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic9.jpg"
                alt="Book 6"
                className="book-image"
              />
              <div className="book-info">
                <h3>The Science of Mind</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 7 */}
          <div className="book-box">
            <a href="/pdfs/book7.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic10.jpg"
                alt="Book 7"
                className="book-image"
              />
              <div className="book-info">
                <h3>Little Women</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 8 */}
          <div className="book-box">
            <a href="/pdfs/book1.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic11.jpg"
                alt="Book 8"
                className="book-image"
              />
              <div className="book-info">
                <h3>Anne of Green Gables</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 9 */}
          <div className="book-box">
            <a href="/pdfs/book2.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="pic12.jpg"
                alt="Book 9"
                className="book-image"
              />
              <div className="book-info">
                <h3>The Fox and the Star</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 10 */}
          <div className="book-box">
            <a
              href="/pdfs/book3.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic13.jpg"
                alt="Book 10"
                className="book-image"
              />
              <div className="book-info">
                <h3>The Strange and Beautiful Sorrows of Ava Lavender</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 11 */}
          <div className="book-box">
            <a
              href="/pdfs/book4.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic14.jpg"
                alt="Book 11"
                className="book-image"
              />
              <div className="book-info">
                <h3>The Sun Is Also a Star</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 12 */}
          <div className="book-box">
            <a
              href="/pdfs/book5.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic15.jpg"
                alt="Book 12"
                className="book-image"
              />
              <div className="book-info">
                <h3>the goldfinch book</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 13 */}
          <div className="book-box">
            <a
              href="/pdfs/book6.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic16.jpg"
                alt="Book 13"
                className="book-image"
              />
              <div className="book-info">
                <h3>Shatter Me</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 14 */}
          <div className="book-box">
            <a
              href="/pdfs/book7.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic17.jpg"
                alt="Book 14"
                className="book-image"
              />
              <div className="book-info">
                <h3>Six of Crows</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 15 */}
          <div className="book-box">
            <a
              href="/pdfs/book1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic18.jpg"
                alt="Book 15"
                className="book-image"
              />
              <div className="book-info">
                <h3>To Sleep in a Sea of Stars</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>

          {/* Book 16 */}
          <div className="book-box">
            <a
              href="/pdfs/book2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="pic19.jpg"
                alt="Book 16"
                className="book-image"
              />
              <div className="book-info">
                <h3>The Priory of the Orange Tree</h3>
                <p>PKR 0</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSectionPage;
