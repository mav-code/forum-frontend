import React from 'react'
import { Link } from 'react-router-dom'

//random comment so I can commit

class Header extends React.Component {
  state = {
    searchTerm: ""
  }

  handleLogout = () => {
    fetch("http:localhost:3000/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(r => r.json())
      .then(() => {
        this.props.handleUpdateCurrentUser(null)
      })
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleUpdateSearch(this.state.searchTerm)
  }


    render() {
      
      return (
        <header>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search Boards..." value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div className="actions">
          {this.props.currentUser ? (
            <button onClick={this.handleLogout}>Logout {this.props.currentUser.username}</button>
          ) : (
              <>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </>
            )}
        </div>
      </header>
      )
    }
}

export default Header;