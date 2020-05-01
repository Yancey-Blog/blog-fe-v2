import React from 'react'
import Layout from 'src/containers/Layout/Layout'
import PostListContainer from 'src/containers/Post/PostList/PostList'

const Post = () => {
  return (
    <Layout title="Blog | Yancey Inc.">
      <PostListContainer />
    </Layout>
  )
}

export default Post