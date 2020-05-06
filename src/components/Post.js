import React from 'react'

class Post extends React.Component {

    render() {
      console.log("in post", this.props)
      if(this.props.post){
      return (
          <tr class="post" onClick={() => this.props.showPost(this.props.post.id)}>
            <td>{this.props.post.title}</td>
            <td>{this.props.post.user.username}</td>
            <td>{this.props.post.comments.length}</td>
          </tr>
      )} else {
        return (null)
      }
    }
}

export default Post;