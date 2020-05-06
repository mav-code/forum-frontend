import React from 'react'
import Comment from './Comment.js'
import { withRouter } from "react-router"
import Post from './Post.js'

class CommentContainer extends React.Component {

  state = {
    comments: []
  }

  componentDidMount() {
    console.log("in commentcontainer cdm 1", this.props)
    fetch(`http://localhost:3000/comments/`)
      .then(r => r.json())
      .then(commentsArray => {
        this.setState({
          comments: commentsArray
        })
        console.log("comments0 cdm", this.state.comments[0].post)
      })
  }

  showPost = (id) => {
    this.props.history.push(`/posts/${id}`)
  }

  thisPostsComments = () => {
    ///// very janky line. must be better way
    return this.state.comments.filter(comment => comment.post_id === parseInt(this.props.location.pathname[this.props.location.pathname.length - 1]))
  }
  
    render() {
      console.log("in comment container", this.props)
      const thisPost = this.props.posts.find(post => post.id === parseInt(this.props.location.pathname[this.props.location.pathname.length - 1]))
      return (
        <>
        <Post post={thisPost} showPost={this.showPost}/>
        {this.thisPostsComments().map(comment => <Comment key={comment.id} comment={comment}/>)}
        </>
      )
    }
}

export default withRouter(CommentContainer);