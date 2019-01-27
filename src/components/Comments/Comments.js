import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component{
    constructor(props){
        super(props);
        this.state = {
            comment: '',
        }
    }

    setComment = (event) => {
        this.setState({
            comment: event.target.value,
        });
    }

    enterComment = () => {
        const action = { type: 'SET_COMMENTS',
        payload: this.state.comment,
        };
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                <h3>Any Comments? (optional)</h3>

                <input type='text' onChange={this.setComment} />
                <button onClick={this.enterComment}>Enter</button>

            </div>
        );
    }
}

export default connect()(Comments);