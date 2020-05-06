import React from 'react'

class Comment extends React.Component {
  
    render() {
      console.log("in comment", this.props)
      return (
          <div>
            {this.props.comment.body}
            {this.props.comment.user.username}
          </div>

      )
    }
}

export default Comment;