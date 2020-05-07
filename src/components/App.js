import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import Header from './Header.js';
import BoardContainer from './BoardContainer.js';
import PostContainer from './PostContainer.js';
import CommentContainer from './CommentContainer.js';
import LoginForm from './LoginForm.js'
import SignupForm from './SignupForm.js'
import ProfilePage from './ProfilePage.js'

class App extends React.Component {
  state = {
    currentUser: null,
    posts: []
  }

handleUpdateCurrentUser = user => {
  this.setState({
    currentUser: user
  })
}

componentDidMount() {
  fetch(`http://localhost:3000/posts/`)
    .then(r => r.json())
    .then(postsArray => {
      // const thisBoardsPosts = postsArray.filter(post => post.board_id = this.props.location)
      // console.log("thisBoardsPosts", thisBoardsPosts)
      // console.log("this.props.location", this.props.location)
      this.setState({
        posts: postsArray
      })
      console.log("in app cdm", postsArray)
    })
    fetch(`http://localhost:3000/autologin/`, {
      credentials: "include"
    })
    .then(r => r.json())
    .then(user => this.setState({currentUser: user}))
}
  
  render() {
    console.log("app state", this.state)
    return (
    <>
      <Header handleUpdateCurrentUser={this.handleUpdateCurrentUser} currentUser={this.state.currentUser}/>
      <BoardContainer />
      {/* <CommentContainer /> */}
      <main>
        <Switch>
          <Route exact path='/login' render={(routeProps) => <LoginForm handleUpdateCurrentUser={this.handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/signup' render={(routeProps) => <SignupForm handleUpdateCurrentUser={this.handleUpdateCurrentUser} {...routeProps} />} />
          <Route path='/boards' render={(routeProps) => <PostContainer posts={this.state.posts} {...routeProps} />} />
          <Route path='/posts' render={(routeProps) => <CommentContainer posts={this.state.posts} {...routeProps} />} />
          <Route path='/profile' render={(routeProps) => <ProfilePage {...routeProps} />} />
        </Switch>
      </main>
      
    </>
    );
  }
}

export default withRouter(App);

// <Route exact path='/boards' render={(routeProps) => <BoardContainer {...routeProps} />} />
// <Route exact path='/posts' render={(routeProps) => <PostContainer {...routeProps} />} />
// I would like to make this work:
// <Route path='boards/:id' render={(routeProps) => <PostContainer {...routeProps} />} />
