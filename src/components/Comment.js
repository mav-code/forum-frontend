import React from 'react'

class Comment extends React.Component {
  
    render() {
      
      return (
          <div>
            This is a comment
            {this.props.comment.body}
            {this.props.comment.user.username}
          </div>

      )
    }
}

export default Comment;