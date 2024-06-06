import React from "react";
import DeletePostButton from "./DeletePostButton";

function Post({ post }) {
  return (
    <div style={{ border: "1px solid white", padding: "15px" }}>
      <h3>{post.author.name}</h3>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <DeletePostButton postId={post.id} />
    </div>
  );
}

export default Post;
