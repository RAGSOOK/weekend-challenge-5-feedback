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

    render(){
        return(
            <div>
                <h3>Any Comments? (optional)</h3>

                <input type='text' onChange={this.setComment} />

            </div>
        );
    }
}

export default connect()(Comments);