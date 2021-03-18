import React from 'react';
import {connect} from 'react-redux';

import * as actions from './../actions'
import requireAuth from "./requireAuth";

class CommentBox extends React.Component{
    state = {comment: ''}

    handleChange = (event) =>{
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
      return(
          <div>
              <form>
                  <h4>Add a comment</h4>
                  <textarea onChange={this.handleChange} value={this.state.comment}/>
                  <div>
                      <button onClick={this.handleSubmit}>Submit Comment</button>
                  </div>
              </form>
              <button onClick={this.props.fetchComment}>Fetch Comment</button>
          </div>
      )
  }
}


export default connect(null, actions)(requireAuth(CommentBox));
