import React from 'react'
import { Link } from 'react-router-dom'


class Post extends React.Component {

  handleDelete = event => {
    event.preventDefault()
    fetch(`http://localhost:3000/posts/${this.props.post.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(console.log("Deleting"))
  }

    render() {
      console.log("in post", this.props)
      if(this.props.post){
      return (
        <>
          <tr class="post" onClick={() => this.props.showPost(this.props.post.id)}>
            <td>{this.props.post.title}</td>
            <td>{this.props.post.user.username}</td>
            <td>{this.props.post.comments.length}</td>
            
          </tr>
          {this.props.currentUser ? (
            this.props.currentUser.id === this.props.post.user.id ? (
              
              <button onClick={this.handleDelete}>Delete</button>
              
            ): (
              null
            )) : (
              null
            )}
        </>
      )} else {
        return (null)
      }
    }
}

export default Post;