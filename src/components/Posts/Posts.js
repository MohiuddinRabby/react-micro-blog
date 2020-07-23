import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";
import { useState } from "react";
const Posts = (props) => {
  const { author, body } = props.posts;
  return (
    <section>
      <h5>
        <Link>{author}</Link>
      </h5>
      <h6>{body}</h6>
      <hr />
    </section>
  );
};

export default Posts;
