import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: -1,
        }
    }

    setUnderstanding = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    nextPage = () => {
        if(this.state.value >= 1 && this.state.value <= 5){
            const action = { type: 'SET_UNDERSTANDING',
            payload: this.state.value,
            };
            this.props.dispatch(action);
            this.props.history.push('/p3');
        }else{
            alert('Please enter a number 1-5');
        }
    }

    render(){
        return(
            <div>
                <h3>Rate how much you understand the material (1-5)</h3>
                <br />
                <br />
                    <input type="number" placeholder="understanding rating" 
                           onChange={this.setUnderstanding} /> 
                <button onClick={this.nextPage}>Next</button>
            </div>
        );
    }
}

export default connect()(Understanding);