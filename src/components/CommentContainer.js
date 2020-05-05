import React from 'react'
import Comment from './Comment.js'
import { withRouter } from "react-router"

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
        console.log("in commentcontainer cdm 2", commentsArray)
      })
  }

  thisPostsComments = () => {
    ///// very janky line. must be better way
    return this.state.comments.filter(comment => comment.post_id === parseInt(this.props.location.pathname[this.props.location.pathname.length - 1]))
  }
  
    render() {
      
      return (
        <>
        This is where the comments go
        {this.thisPostsComments().map(comment => <Comment key={comment.id} comment={comment}/>)}
        </>
      )
    }
}

export default withRouter(CommentContainer);