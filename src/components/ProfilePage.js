import React from 'react'
import PostContainer from './PostContainer.js'
import UserPostsContainer from './UserPostsContainer.js'
import { Link } from 'react-router-dom'

class ProfilePage extends React.Component {

    render () {
        console.log(this.props.posts)
        return (
            <>
            <h4>Our User's Posts</h4>
            < UserPostsContainer posts = {this.props.posts} />
            </>
        )
    }
}

export default ProfilePage;