import React from 'react'

class Board extends React.Component {
  
    render() {
      console.log(this.props.board)
      
      return (
        <li>
        {this.props.board.name}
        </li>
      )
    }
}

export default Board;