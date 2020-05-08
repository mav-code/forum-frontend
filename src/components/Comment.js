import React from 'react'

class Comment extends React.Component {
  
    render() {
      console.log("in comment", this.props)
      return (
          <div>
           <tr>
            <td>{this.props.comment.body}</td>
            <td>{this.props.comment.user.username}</td>
          </tr>
          </div>

      )
    }
}

export default Comment;