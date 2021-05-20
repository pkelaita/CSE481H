import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Clue from './Clue';
import Looking from './Looking';
import Found from './Found';
import EndOfHunt from './EndOfHunt';
import Quiz from './Quiz';
import Result from './Result';
import ThankYou from './ThankYou';

function App(props) {
  return (
    <div className="App-intro">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/clue" exact component={() => <Clue />} />
          <Route path="/looking" exact component={() => <Looking />} />
          <Route path="/Found" exact component={() => <Found />} />
          <Route path="/endofhunt" exact component={() => <EndOfHunt />} />
          <Route path="/quiz" exact component={() => <Quiz />} />
          <Route path="/result" exact component={() => <Result />} />
          <Route path="/thankyou" exact component={() => <ThankYou />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
