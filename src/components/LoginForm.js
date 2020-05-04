import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  
    render() {
      const { username, password } = this.state

      return (
        <div className="form-container">
        <Link to={`/signup`}>
          <button>Sign Up</button>
        </Link>
        <h3>Sign in to your account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <input type="submit" value="Login" />
        </form>
      </div>
      )
    }
}

export default LoginForm;