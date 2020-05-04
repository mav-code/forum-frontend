import React from 'react'
import Post from './Post.js'

class PostContainer extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    console.log("in postcontainer cdm 1", this.props)
    fetch(`http://localhost:3000/posts/`)
      .then(r => r.json())
      .then(postsArray => {
        this.setState({
          posts: postsArray
        })
        console.log("in postcontainer cdm 2", postsArray)
      })
  }

  
    render() {
      console.log("in postcontainer render", this.state.posts)
      return (
        <div class="postcontainer">
        This is where the posts go
        <table>
          <tr>
            <th>Topic</th>
            <th>Author</th>
            <th>Comments</th>
          </tr>
          {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
        </table>
        </div>
      )
    }
}

export default PostContainer;