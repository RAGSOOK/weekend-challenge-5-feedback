import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Review.css';
import axios from 'axios';

class Review extends Component{
    constructor(props){
        super(props);
        this.state = {
            complete: true,
        }
    }

    complete = () => {
        if(this.state.complete){
            return <button onClick={this.handleSubmit} >Submit</button>
        }
        else{
            return <button disabled={true}>Incomplete</button>
        }
    }

    handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxStore.feedbackReducer,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    render(){
        return(
            <div className='reviewBlock'>
                <header>
                    <h3>Review Your Feedback</h3>
                </header>
                <br />
                <p>Feelings: {this.props.reduxStore.feeling}</p>
                <p>Understanding: {this.props.reduxStore.understanding}</p>
                <p>Support: {this.props.reduxStore.supported}</p>
                <p>Comments: {this.props.reduxStore.comments}</p>

                <br />
                {this.complete()}
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({reduxStore: reduxStore});

export default connect(mapReduxStoreToProps)(Review);