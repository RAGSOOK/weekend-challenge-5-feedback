import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: -1,
        }
    }

    setFeeling = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    nextPage = () => {
        if(this.state.value >= 1 && this.state.value <= 5){
            const action = { type: 'SET_FEELING',
            payload: this.state.value,
            };
            this.props.dispatch(action);
            this.props.history.push('/p2');
        }else{
            alert('Please enter a number 1-5');
        }
    }

    render(){
        return(
            <div>
                <h3>Rate how you're feeling (1-5)</h3>
                <br />
                <br />
                    <input type="number" placeholder="feeling rating" 
                           onChange={this.setFeeling} /> 
                <button onClick={this.nextPage}>Next</button>
            </div>
        );
    }
}

export default connect()(Feeling);