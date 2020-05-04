import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './Header.js';
import BoardContainer from './BoardContainer.js';
import PostContainer from './PostContainer.js';
import LoginForm from './LoginForm.js'
import SignupForm from './SignupForm.js'

class App extends React.Component {
  state = {
    page: 'signup'
  }

  getPage() {
    switch (this.state.page) {
      case "login":
        return <LoginForm />
      case "signup":
        return <SignupForm />
      default:
        return <h1>404</h1>
    }
  }
  render() {
    
    return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/login' render={(routeProps) => <LoginForm {...routeProps} />} />
          <Route exact path='/signup' render={(routeProps) => <SignupForm {...routeProps} />} />
          <Route exact path='/boards' render={(routeProps) => <BoardContainer {...routeProps} />} />
          <Route exact path='/posts' render={(routeProps) => <PostContainer {...routeProps} />} />
        </Switch>
      </main>
      
    </>
    );
  }
}

export default App;


