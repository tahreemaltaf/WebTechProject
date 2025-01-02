import React, { useState } from "react";


const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "What can I read on Bookflix?", answer: "You can read a wide variety of books on Bookflix." },
    { question: "What is Bookflix?", answer: "Bookflix is a reading service offering a vast selection of entertainment content." },
    { question: "How much does Bookflix cost?", answer: "Bookflix offers multiple plans starting at affordable rates." },
    { question: "Where can I read on Bookflix?", answer: "You can watch Books on any internet-connected device with the app or browser." },
    { question: "How do I cancel?", answer: "You can cancel your subscription anytime from your account settings." },
    { question: "Is Bookflix good for children?", answer: "Bookflix offers kid-friendly content and parental controls." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
