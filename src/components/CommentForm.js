import React from 'react'


const initialState = {
    body: "",
    post_id: ""
  }


class CommentForm extends React.Component {
    state = initialState
    
    componentDidMount() {
        this.setState({
            post_id: this.props.post_id
        })
    }
    
  
    handleInputChange = event => {
      this.setState({
        body: event.target.value
      })
    }
  
    setBoardId(id) {
        
        this.setState((state) => {
            return {post: id}
        })
    }

    handleSubmit = event => {
      event.preventDefault()
      console.log("submitting comment")
      console.log("this.props", this.props)
  
      fetch(`http://localhost:3000/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(this.state)
      })
        .then(r => r.json())
        .then(updatedPost => {
          this.setState(initialState)
        })
    }
    

    render () {
        
        let { body, post }= this.state
        
        
        return (
            <div className="post-form-container">
                <h4>Leave a comment</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment:</label>
                     <textarea name="body" onChange={this.handleInputChange} value={body} />
                     <input type="submit" value="Submit" />
                </form>
             </div>
        )
    }

}

export default CommentForm