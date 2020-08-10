import React from "react";
import { useState } from "react";
const Posts = (props) => {
  const { joke } = props.posts;
  //like state
  const [like, setLike] = useState(false);
  const handleLikePost = () => {
    setLike(true);
  };
  const handleUnlikePost = () => {
    setLike(false);
  };

  return (
    <div>
      <h6>{joke}</h6>
      {like ? (
        <h5 onClick={handleUnlikePost} style={{ cursor: "pointer" }}>
          <i className="fas fa-thumbs-up"></i>
        </h5>
      ) : (
        <h5 onClick={handleLikePost} style={{ cursor: "pointer" }}>
          <i className="far fa-thumbs-up"></i>
        </h5>
      )}

      <hr />
    </div>
  );
};

export default Posts;
