import React from 'react';

const Post = ({ author, content, timestamp }) => {
  return (
    <div className="post">
      <div className="post__header">
        <img className="post__avatar" src={author.avatar} alt={`${author.name}'s Avatar`} />
        <div className="post__author">{author.name}</div>
        <div className="post__timestamp">{timestamp}</div>
      </div>
      <div className="post__content">{content}</div>
    </div>
  );
};

export default Post;
