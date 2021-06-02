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
import StepOne from './instruction-pages/StepOne';
import StepTwo from './instruction-pages/StepTwo';
import StepThree from './instruction-pages/StepThree';
import StepFour from './instruction-pages/StepFour';
import StepFive from './instruction-pages/StepFive';
import StepSix from './instruction-pages/StepSix';
import Album from './Album';
import Personalization from './Personalization';

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
          <Route path="/stepone" exact component={() => <StepOne />} />
          <Route path="/steptwo" exact component={() => <StepTwo />} />
          <Route path="/stepthree" exact component={() => <StepThree />} />
          <Route path="/stepFour" exact component={() => <StepFour />} />
          <Route path="/stepfive" exact component={() => <StepFive />} />
          <Route path="/stepsix" exact component={() => <StepSix />} />
          <Route path="/album" exact component={() => <Album />} />
          <Route path="/personalization" exact component={() => <Personalization />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
