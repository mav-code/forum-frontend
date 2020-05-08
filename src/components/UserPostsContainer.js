import React from 'react'
import Post from './Post.js'
import PostForm from './PostForm.js'
import { withRouter } from "react-router"

class UserPostsContainer extends React.Component {

    render() {
        console.log(this.props.posts)
        //this.props.posts.filter(post => )
        return(
            <>
            <h4>User Posts will go here</h4>
            </>
        )
    }

}

export default UserPostsContainer;