import React from 'react'
import { Link } from 'react-router-dom'



class Post extends React.Component {

  handleDelete = (id) => {
    fetch("http://localhost:3000/posts/"+ id, {
      method: "DELETE"
    })
  }

  //handleEdit = (id) 

    render() {
      console.log("in post", this.props.currentUser)
      if(this.props.post){
      return (
        <>
          <tr class="post" onClick={() => this.props.showPost(this.props.post.id)}>
            <td>{this.props.post.title}</td>
            <td>{this.props.post.user.username}</td>
            <td>{this.props.post.comments.length}</td>
            
          </tr>
          
        </>
      )} else {
        return (null)
      }
    }
}

// {this.props.currentUser.id === this.props.post.user.id ? (
//   <Link to="/login">
//     <button onClick={this.handleEdit(this.props.post.id)}>Edit</button>
//   </Link>  
// ): (
//   null
// )
// }
export default Post;