import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <>
      <section>
        <div className="p-4">
          <code>
            <h2 className="font-bold text-4xl text-blue-600 text-center mt-2">
              Our Recent Blogs And Few Common Question Answer
            </h2>
          </code>
          <div className="divider"></div>
          {blogs.map((blog) => {
            return <BlogCard key={blog} blog={blog}></BlogCard>;
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
