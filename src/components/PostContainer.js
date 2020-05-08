import React from 'react'
import Post from './Post.js'
import PostForm from './PostForm.js'
import { withRouter } from "react-router"

class PostContainer extends React.Component {

  // state = {
  //   posts: []
  // }

  // componentDidMount() {
  //   console.log("in postcontainer cdm 1", this.props)
  //   fetch(`http://localhost:3000/posts/`)
  //     .then(r => r.json())
  //     .then(postsArray => {
  //       // const thisBoardsPosts = postsArray.filter(post => post.board_id = this.props.location)
  //       // console.log("thisBoardsPosts", thisBoardsPosts)
  //       // console.log("this.props.location", this.props.location)
  //       this.setState({
  //         posts: postsArray
  //       })
  //       console.log("in postcontainer cdm 2", postsArray)
  //     })
  // }

  thisBoardsPosts = () => {
    console.log("thisBoardsPosts", this.props)
    //console.log("pathname", this.props.location.pathname.match(/\d+/)[0])
   
    return this.props.posts.filter(post => post.board_id === parseInt(this.props.location.pathname.match(/\d+/)[0]))
  }

  showPost = (id) => {
    this.props.history.push(`/posts/${id}`)
  }

  
    render() {
      const ourPosts = this.thisBoardsPosts()
      console.log("in pc render", ourPosts)
      return (
        <div class="postcontainer">
        <table>
          <tr>
            <th>Topic</th>
            <th>Author</th>
            <th>Comments</th>
          </tr>
          {ourPosts.map(post => <Post key={post.id} post={post} showPost={this.showPost}/>)}
        </table>
        <PostForm board_id={parseInt(this.props.location.pathname.match(/\d+/)[0])} showPost={this.showPost} renderNewPost={this.props.renderNewPost} />
        </div>
        
      )
    }
}

export default withRouter(PostContainer);