import React from 'react'
import Post from './Post.js'
import { withRouter } from "react-router"

class PostContainer extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    console.log("in postcontainer cdm 1", this.props)
    fetch(`http://localhost:3000/posts/`)
      .then(r => r.json())
      .then(postsArray => {
        // const thisBoardsPosts = postsArray.filter(post => post.board_id = this.props.location)
        // console.log("thisBoardsPosts", thisBoardsPosts)
        // console.log("this.props.location", this.props.location)
        this.setState({
          posts: postsArray
        })
        console.log("in postcontainer cdm 2", postsArray)
      })
  }

  thisBoardsPosts = () => {
    ///// very janky line. must be better way
    return this.state.posts.filter(post => post.board_id === parseInt(this.props.location.pathname[this.props.location.pathname.length - 1]))
  }

  showPost = (id) => {
    this.props.history.push(`/posts/${id}`)
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
          {this.thisBoardsPosts().map(post => <Post key={post.id} post={post} showPost={this.showPost}/>)}
        </table>
        </div>
      )
    }
}

export default withRouter(PostContainer);