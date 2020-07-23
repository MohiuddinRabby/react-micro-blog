import React from "react";
import "./PostBlog.css";

const PostBlog = (props) => {
  console.log(props);
  const { text, handlePost } = props;
  return (
    <section>
      <div className="profile">
        <img alt="profile-img" src="https://placeimg.com/40/40/people" />
      </div>
    </section>
  );
};

export default PostBlog;
