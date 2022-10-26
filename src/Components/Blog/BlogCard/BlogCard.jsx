import React from "react";

const BlogCard = ({ blog }) => {
  const { question, answers, img } = blog;
  return (
    <>
      <section>
        <div className="card lg:card-side bg-base-100 shadow-xl m-4">
          <figure>
            <img src={img} alt={question} style={{width:"20rem"}} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{question}</h2>
            <p>{answers}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;
