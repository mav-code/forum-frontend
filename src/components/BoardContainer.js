import React from 'react'
import Board from './Board.js'

class BoardContainer extends React.Component {

  /// fetching posts here for future use like "last post in board" info

  state = {
    boards: [],
    posts: []
  }

  componentDidMount() {
    this.fetchBoards()
    this.fetchPosts()
  }

  fetchBoards() {
    fetch(`http://localhost:3000/boards`)
      .then(r => r.json())
      .then(boardsObjs => {
        this.setState({
          boards: boardsObjs
        })
      })
  }

  fetchPosts() {
    fetch(`http://localhost:3000/posts`)
      .then(r => r.json())
      .then(postsObjs => {
        this.setState({
          posts: postsObjs
        })
      })
  }

  
    render() {
      
      return (
        <div class="boardcontainer">
        This is where the boards go
        <ul>
        {this.state.boards.map(board => <Board key={board.id} board={board}/>)}
        </ul>
        </div>
      )
    }
}

export default BoardContainer;