import React from 'react'
import PostList from '../components/list/PostList'
import { connect } from 'react-redux'
import { getPosts } from '../store/reducers/posts'

const PostContainer = ({ posts }) => (
  <div className="post-container">
    <PostList posts={posts} />
  </div>
)

const mapStateToProps = (state) => ({
  posts: getPosts(state)
})

export default connect(
  mapStateToProps
)(PostContainer)
