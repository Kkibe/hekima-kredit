import React, { useState } from 'react'
import './Faq.scss';

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What types of loans do you offer?",
      answer: "We offer a variety of loans, including personal loans, payday loans, business loans, and mortgage/home loans. Our loans are designed to be fast, secure, and accessible to meet your financial needs."
    },
    {
      id: 2,
      question: "How do I apply for a loan?",
      answer: "Applying for a loan is simple. Just register on our website, fill out the loan application form, and submit your request. Once approved, your loan will be disbursed instantly to your M-Pesa account."
    },
    {
      id: 3,
      question: "How long does loan approval take?",
      answer: "Our loan approval process is fast and efficient. In most cases, loan approval takes just a few minutes, and funds are disbursed immediately to your M-Pesa account."
    },
    {
      id: 4,
      question: "Do I need collateral or a guarantor to get a loan?",
      answer: "No, you do not need collateral or a guarantor to apply for a loan. Our loans are unsecured, making it easy for you to access financial assistance without unnecessary hurdles."
    },
    {
      id: 5,
      question: "What is the interest rate on loans?",
      answer: "Our loans have a competitive interest rate of 5% per annum. The final interest amount depends on the loan amount and repayment duration."
    },
    {
      id: 6,
      question: "Is there a service fee for loans?",
      answer: "Yes, we charge a small 2% service fee on all approved loans. This helps cover processing costs and ensures fast and secure transactions."
    },
    {
      id: 7,
      question: "How do I repay my loan?",
      answer: "Loan repayments are made through M-Pesa. You will receive clear repayment instructions after loan approval, including the amount due and the payment deadline."
    },
    {
      id: 8,
      question: "Can I repay my loan before the due date?",
      answer: "Yes, you can make early repayments at any time without any penalties. Early repayment may also improve your eligibility for future loans."
    },
    {
      id: 9,
      question: "What happens if I don’t repay my loan on time?",
      answer: "Late repayments may attract penalties, affect your credit score, and limit access to future loans. We encourage timely payments to maintain a good credit record."
    },
    {
      id: 10,
      question: "How can I contact customer support?",
      answer: "Our customer support team is available to assist you. You can reach us via our website contact form, email, or phone for any inquiries or assistance."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleAccordion = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq" id='faq'>
      <h1>FAQ's</h1>
      <h2>People ask for:</h2>
      <div className="accordion">
        {faqs.map((faq) => (
          <div
            className="accordion-item"
            key={faq.id}
            onClick={() => toggleAccordion(faq.id)}
            aria-expanded={activeFaq === faq.id}
          >
            <button id={`accordion-button-${faq.id}`}>
              <span className="accordion-title">{faq.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {activeFaq === faq.id && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
