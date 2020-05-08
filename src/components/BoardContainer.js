import React from 'react'
import Board from './Board.js'

import { withRouter } from "react-router"

class BoardContainer extends React.Component {

  /// could fetch posts here for future use like "last post in board" info

  state = {
    boards: [],
    posts: []
  }

  componentDidMount() {
    this.fetchBoards()
    // this.fetchPosts()
  }

  fetchBoards() {
    fetch(`http://localhost:3000/boards`)
      .then(r => r.json())
      .then(boardsArray => {
        this.setState({
          boards: boardsArray
        })
      })
  }

  showBoard = (id) => {
    this.props.history.push(`/boards/${id}`)
  }

  
    render() {
      
      return (
        <div id="boardcontainer" class="sidebar">
          Choose a Board!
          <ul>
            {this.state.boards.map(board => <Board key={board.id} board={board} showBoard={this.showBoard}/>)}
            
          </ul>
        </div>
      )
    }
}

export default withRouter(BoardContainer);