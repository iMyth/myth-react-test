import React from 'react'

const CommentList = ({ comments }) => (
  <>
    {
      comments.list.map(p => (
        <div key={p.id} className="post-preview-card">
          <span>{p.name}</span>
          <span>{p.email}</span>
          <span>{p.company.name}</span>
        </div>
      ))
    }
  </>
)

export default CommentList
