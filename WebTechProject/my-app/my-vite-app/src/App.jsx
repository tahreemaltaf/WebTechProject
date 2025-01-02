import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BooksSection from "./components/BooksSection";
import Footer from "./components/Footer";
import ReadMoreSignUp from "./components/ReadMoreSignUp";
import TrendingNow from "./components/TrendingNow";
import SignUp from "./components/SignUp";
import BookSectionPage from "./components/BookSectionPage";
import SubscriptionPlan from "./components/SubscriptionPlan"; // Import SubscriptionPlan
import FAQComponent from "./components/FAQComponent"; // Import FAQComponent
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div className="background">
                  <div className="overlay">
                    <Header />
                    <HeroSection />
                  </div>
                </div>
                <BooksSection />
                <ReadMoreSignUp />
                <TrendingNow />
                <SubscriptionPlan /> {/* Add SubscriptionPlan Section */}
                <FAQComponent /> {/* Add FAQComponent Section */}
                <Footer />
              </>
            }
          />
          {/* Sign Up Page */}
          <Route path="/signup" element={<SignUp />} />
          {/* Book Section Page */}
          <Route path="/book-section" element={<BookSectionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
