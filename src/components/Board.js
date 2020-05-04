import React from 'react'

class Board extends React.Component {
  
    render() {
      console.log(this.props.board)
      
      return (
        <li onClick={() => this.props.showBoard(this.props.board.id)}>
        {this.props.board.name}
        </li>
      )
    }
}

export default Board;