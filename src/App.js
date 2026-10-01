import React, { useState } from "react";
import "./App.css";

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library used for building user interfaces and web applications. It allows developers to create reusable components."
    },
    {
      question: "What is a React component?",
      answer:
        "A component is a reusable piece of UI. Components can contain HTML-like JSX, JavaScript logic, and styling."
    },
    {
      question: "What is useState?",
      answer:
        "useState is a React Hook that allows a component to store and update information that can change over time."
    },
    {
      question: "What is useEffect?",
      answer:
        "useEffect is a React Hook used to perform side effects such as fetching data, setting timers, or updating external systems."
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript."
    },
    {
      question: "Why should I learn React?",
      answer:
        "React is widely used for creating modern interactive websites and applications. Learning React also helps you understand component-based development."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="app">
      <div className="faq-container">

        <div className="header">
          <h1>❓ FAQ</h1>
          <p>Frequently Asked Questions</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <span className="icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="footer">
          <p>Built with React ⚛️</p>
        </div>

      </div>
    </div>
  );
}

export default App;