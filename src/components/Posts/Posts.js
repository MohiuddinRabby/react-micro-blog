import React from "react";
import { useState } from "react";
import Comment from "../Comment/Comment";
const Posts = (props) => {
  const { joke } = props.posts;
  //like state
  const [like, setLike] = useState(false);
  //like post
  const handleLikePost = () => {
    setLike(true);
  };
  //unlike post after like
  const handleUnlikePost = () => {
    setLike(false);
  };
  //comment state
  const [comment, setComment] = useState([{ comment: "nice norris" }]);
  const [commentText, setCommentText] = useState("");
  //submit comment
  const handleCommentPost = (e) => {
    e.preventDefault();
    const newComment = [{ comment: commentText }, ...comment];
    setComment(newComment);
    setCommentText("");
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
      <form onSubmit={handleCommentPost}>
        <input
          type="text"
          placeholder="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </form>
      {comment.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
      <hr />
    </div>
  );
};

export default Posts;
