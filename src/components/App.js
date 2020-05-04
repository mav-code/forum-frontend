import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './Header.js';
import BoardContainer from './BoardContainer.js';
import PostContainer from './PostContainer.js';
import LoginForm from './LoginForm.js'
import SignupForm from './SignupForm.js'

class App extends React.Component {
  state = {
    currentUser: null
  }

handleUpdateCurrentUser = user => {
  this.setState({
    currentUser: user
  })
}
  
  render() {
    console.log(this.state)
    return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/login' render={(routeProps) => <LoginForm handleUpdateCurrentUser={this.handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/signup' render={(routeProps) => <SignupForm handleUpdateCurrentUser={this.handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/boards' render={(routeProps) => <BoardContainer {...routeProps} />} />
          <Route exact path='/posts' render={(routeProps) => <PostContainer {...routeProps} />} />
        </Switch>
      </main>
      
    </>
    );
  }
}

export default App;


