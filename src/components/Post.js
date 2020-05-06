import React from 'react'

class Post extends React.Component {
  
    render() {
      
      return (
          <tr onClick={() => this.props.showPost(this.props.post.id)}>
            <td>{this.props.post.title}</td>
            <td>{this.props.post.user.username}</td>
            <td>{this.props.post.comments.length}</td>
          </tr>
      )
    }
}

export default Post;