import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component{

    newFeedback = () => {
        const action = { type: 'RESET_FEEDBACK',
        };
        this.props.dispatch(action);
        this.props.history.push('/p');
    }
    render(){
        return(
            <div>
                <h1>Feedback Sent!</h1>
                <br />
                <button onClick={this.newFeedback}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(Confirmation);