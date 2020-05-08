import React from 'react'


const initialState = {
    title: "",
    body: "",
    board_id: ""
  }


class PostForm extends React.Component {
    state = initialState
    
    componentDidMount() {
        this.setState({
            board_id: this.props.board_id
        })
    }
    
  
    handleInputChange = event => {
      const inputName = event.target.name
      this.setState({
        [inputName]: event.target.value
      })
    }
  
    setBoardId(id) {
        
        this.setState((state) => {
            return {board: id}
        })
    }

    handleSubmit = event => {
      event.preventDefault()
      console.log("submitting post")
  
      fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(this.state)
      })
        .then(r => r.json())
        .then(updatedBoard => {
          this.setState(initialState)
        })
    }
    

    render () {
        
        let {title, body }= this.state
        
        
        return (
            <div className="post-form-container">
                <h6>Make a Post</h6>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <textarea name="title" onChange={this.handleInputChange} value={title} />
                    <label>Body:</label>
                     <textarea name="body" onChange={this.handleInputChange} value={body} />
                     <input type="submit" value="Submit" />
                </form>
             </div>
        )
    }

}

export default PostForm