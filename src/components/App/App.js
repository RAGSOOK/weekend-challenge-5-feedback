import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route,} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Router>
          <div>

            <Route exact path="/" component={Feeling} />
            <Route exact path="/2" component={CUnderstanding} />
            <Route exact path="/3" component={Supported} />
            <Route exact path="/4" component={Comments} />
            <Route exact path="/admin" component={Admin} />

            <Route path="/" component={Review} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
