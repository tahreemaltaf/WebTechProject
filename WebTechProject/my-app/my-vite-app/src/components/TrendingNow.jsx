import React from 'react';

const TrendingNow = () => {
  return (
    <section className="trending-now">
      <h2 className="trending-title">Trending Now</h2>
      <div className="trending-books">
        {/* Book 1 */}
        <div className="trending-book">
          <a href="/pdfs/book7.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="pic16.jpg" // Replace with actual image URL
              alt="Becoming by Michelle Obama"
              className="trending-image"
            />
            <h3 className="trending-book-title">Shatter Me</h3>
            <p className="trending-author">by Michelle Obama</p>
            <p className="trending-price">PKR 0</p>
          </a>
        </div>

        {/* Book 2 */}
        <div className="trending-book">
          <a href="/pdfs/book4.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="pic13.jpg" // Replace with actual image URL
              alt="The Silent Patient by Alex Michaelides"
              className="trending-image"
            />
            <h3 className="trending-book-title">The Strange Sorrow</h3>
            <p className="trending-author">by Alex Michaelides</p>
            <p className="trending-price">PKR 0</p>
          </a>
        </div>

        {/* Book 3 */}
        <div className="trending-book">
          <a href="/pdfs/book5.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="pic10.jpg" // Replace with actual image URL
              alt="Atomic Habits by James Clear"
              className="trending-image"
            />
            <h3 className="trending-book-title">Little Women</h3>
            <p className="trending-author">by James Clear</p>
            <p className="trending-price">PKR 0</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
