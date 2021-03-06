import React from "react";
import Posts from "../Posts/Posts";
import { useState } from "react";
import "./Home.css";
import About from "../About/About";
import { useEffect } from "react";
const Home = () => {
  const [posts, setPosts] = useState([]);
  //loading state
  const [loading, setLoading] = useState(true);
  //get api data
  useEffect(() => {
    fetch("https://api.icndb.com/jokes")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.value.slice(10, 15));
        setLoading(false);
      });
  }, []);
  //newpost state
  const [text, setText] = useState("");
  //onsubmit function
  const handlePost = (e) => {
    e.preventDefault();
    const newPost = [
      {
        id: Math.floor(Math.random() * 20) + 30,
        joke: text,
      },
      ...posts,
    ];
    setPosts(newPost);
    setText("");
  };
  return (
    <section>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-3 profile">
            <img alt="profile-img" src="https://placeimg.com/100/100/people" />
            <form>
              <textarea
                rows="5"
                placeholder="Write Your Post"
                onChange={(e) => setText(e.target.value)}
                value={text}
              ></textarea>
              <br />
              <button onClick={handlePost} className="btn btn-primary btn-sm">
                Post
              </button>
            </form>
          </div>
          <div className="col-md-7">
            {loading ? (
              <h1 className="text-center">loading...</h1>
            ) : (
              posts.map((post) => <Posts key={post.id} posts={post}></Posts>)
            )}
          </div>
          <div className="col-md-2">
            <About></About>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
