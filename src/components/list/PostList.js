import React from 'react'

const PostList = ({ posts }) => (
  <>
    { posts.list.map(p => (
      <div key={p.id} className="post-preview-card">{p.body}</div>
    )) }
  </>
)

export default PostList
