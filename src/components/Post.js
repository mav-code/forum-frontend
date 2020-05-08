import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'



class Post extends React.Component {

    render() {
      console.log("pathname", this.props.location.pathname.substring(1, 6))
      let body
      if(this.props.location.pathname.substring(1, 6) === "posts"){
        body = <tr>
          <td>{this.props.post.body}</td>
          </tr>
      }
      if(this.props.post){
      return (
        <>
          <tr class="post" onClick={() => this.props.showPost(this.props.post.id)}>
            <td>{this.props.post.title}</td>
            <td>{this.props.post.user.username}</td>
            <td>{this.props.post.comments.length}</td>
          </tr>
          {body}
          
        </>
      )} else {
        return (null)
      }
    }
}

export default withRouter(Post);