import React from 'react';

const Posts = (props) => {
    const { author, body } = props.posts
    return (
        <section>
            <h5>{author}</h5>
            <h6>{body}</h6>
            <hr />
        </section>
    );
};

export default Posts;