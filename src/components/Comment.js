import React from 'react'

class Comment extends React.Component {
  
    render() {
      console.log("in comment", this.props)
      let thisUser
      if(this.props.comment.user){
        thisUser = this.props.comment.user.username
      } else {
        thisUser = "You, just now"
      }
      return (
          <div>
           <tr>
            <td>{this.props.comment.body}</td>
            <td>{thisUser}</td>
          </tr>
          </div>

      )
    }
}

export default Comment;