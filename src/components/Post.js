import React from 'react'

class Post extends React.Component {
  state = {
    title: "",
    user: {username: ""},
    comments: []
  }
  
    render() {
      console.log("in post", this.props)
      return (
          <tr class="post" onClick={() => this.props.showPost(this.props.post.id)}>
            <td>{this.props.post.title}</td>
            <td>{this.props.post.user.username}</td>
            <td>{this.props.post.comments.length}</td>
          </tr>
      )
    }
}

export default Post;