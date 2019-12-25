import React from 'react'
import './Post.scss'
import ContentTitle from '../ContentTitle/ContentTitle'

function Post({ title, body, id}) {
  return (
    <div className="post">
      <ContentTitle title={title} link={'/post/' + id}/>
      <p>{body}</p>
    </div>
  );
}

export default Post
