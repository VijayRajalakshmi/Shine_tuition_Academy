import React, { useState } from 'react';
import './FAQ.css';  // You can add your CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer a variety of courses including Mathematics, Science, and English for both school and competitive exams.',
    },
    {
      question: 'How do I enroll?',
      answer: 'You can enroll through our website or contact us directly via WhatsApp or Instagram.',
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes, we offer both online and offline classes to suit your preference.',
    },
    {
      question: 'What are the class timings?',
      answer: 'Class timings vary depending on the course and level. Please contact us for the most accurate schedule.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle visibility of the answer
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
