import React from "react";
import { useLoaderData } from "react-router-dom";

const FAQ = () => {
  const faqs = useLoaderData();

  return (
    <>
      <section className="p-6">
        <h1 className="font-bold text-center text-blue-600 text-2xl">Few Common Question Answer (FAQ)</h1>
        <div className="divider"></div>
        <div>
          {faqs.map((faq) => {
            const { question, answer } = faq;
            return (
              <div className="m-4">
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                >
                  <div className="collapse-title text-xl font-medium">
                    {question}
                  </div>
                  <div className="collapse-content">
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FAQ;
