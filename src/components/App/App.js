import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect} from 'react-router-dom';

//My components
import Feeling from '../Feeling/Feeling.js';
import Understanding from '../Understanding/Understanding.js';
import Supported from '../Supported/Supported.js';
import Comments from '../Comments/Comments.js';
import Admin from '../Admin/Admin.js';
import Review from '../Review/Review.js';
import Confirmation from '../Confirmation/Confirmation.js';

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

            <Redirect from="/" to="/p" />
            <Route exact path="/p" component={Feeling} />
            <Route exact path="/p2" component={Understanding} />
            <Route exact path="/p3" component={Supported} />
            <Route exact path="/p4" component={Comments} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/admin" component={Admin} />

            <Route exact path="/(p|p2|p3|p4)" component={Review} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
