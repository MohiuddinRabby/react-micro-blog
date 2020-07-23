import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";
import { useState } from "react";
const Posts = ({ posts }) => {
  //love to post state
  const [love, setLove] = useState(null);
  //set love to post
  const giveLoveToPost = (e) => {
    e.preventDefault();
    setLove(true);
  };
  //unset love to post
  const takeBackLove = (e) => {
    e.preventDefault();
    setLove(false);
  };
  return (
    <section>
      <h5>
        <Link to="/">{posts.author}</Link>
      </h5>
      <h6>{posts.body}</h6>
      {love ? (
        <h6 className="loved" onClick={takeBackLove}>
          Loved
        </h6>
      ) : (
        <h6 className="love" onClick={giveLoveToPost}>
          Love
        </h6>
      )}
      <hr />
    </section>
  );
};

export default Posts;
