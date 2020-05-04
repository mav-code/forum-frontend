import React from 'react';
import '../App.css';
import Header from './Header.js';
import BoardContainer from './BoardContainer.js';
import PostContainer from './PostContainer.js';

class App extends React.Component {
  
  render() {
    
    return (
    <div className="App">
    This text is in App.js
      <Header/>
      <BoardContainer/>
      <PostContainer/>
    </div>
    );
  }
}

export default App;