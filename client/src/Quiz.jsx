import React from 'react';
import { Button, RadioGroup, Radio, Checkbox } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Quiz(props) {
  const li = (
    <li>
      <span>question</span>
      <br />
      <br />
      <label htmlFor="q1o1">
        <input type="radio" id="q1o1" name="question1" className="radio" />
        Higher mortality rates of seagulls in the surrounding region due to aircrafts.
      </label><br />
      <label htmlFor="q1o2">
        <input type="radio" id="q1o2" name="question1" className="radio" />
        Extra tens to hundreds of tons of nitrogen and phosphorus in nearby lakes and reservoirs.
      </label><br />
      <br />
      <br />
    </li>
  );

  return (
    <div className="app-width">
      <h1>Quiz Time!</h1>
      <ol>
        <li>
          <span>What are some of the impacts that 1.4 million and more seagulls feeding in North American landfills have on the environment?</span>
          <br />
          <br />
          <label htmlFor="q1o1">
            <input type="radio" id="q1o1" name="question1" className="radio" />
            Higher mortality rates of seagulls in the surrounding region due to aircrafts.
          </label><br />
          <label htmlFor="q1o2">
            <input type="radio" id="q1o2" name="question1" className="radio" />
            Extra tens to hundreds of tons of nitrogen and phosphorus in nearby lakes and reservoirs.
          </label><br />
          <label htmlFor="q1o3">
            <input type="radio" id="q1o3" name="question1" className="radio" />
            Increased costs for local governments to maintain water quality levels.
          </label>
          <br />
          <br />
        </li>
        <li>
          <span>True or false: Recycling paper using current methods and energy sources will help reduce emissions and combat climate change.</span>
          <br />
          <br />
          <label htmlFor="q2o1">
            <input type="radio" id="q2o1" name="question2" className="radio" />
            True
          </label><br />
          <label htmlFor="q2o2">
            <input type="radio" id="q2o2" name="question2" className="radio" />
            False
          </label>
          <br />
          <br />
        </li>
        <li>
          <span>Is disposing food waste in the garbage more sustainable than composting it, why or why not?</span>
          <br />
          <br />
          <label htmlFor="q3o1">
            <input type="radio" id="q3o1" name="question3" className="radio" />
            No, food waste in landfills decay and produce the greenhouse gas methane while the correct type (aerobic) of composting doesn’t.
          </label><br />
          <label htmlFor="q3o2">
            <input type="radio" id="q3o2" name="question3" className="radio" />
            Yes, food waste in landfills are buried and all gases produced are trapped, therefore there are no emissions when compared to composting.
          </label><br />
          <label htmlFor="q3o3">
            <input type="radio" id="q3o3" name="question3" className="radio" />
            Yes, although food waste in landfills produce methane, the amount of methane emissions is lower compared to aerobic composting.
          </label>
          <br />
          <br />
        </li>
        <li>
          <span>Select all of the true statement(s) about the research from UW on microplastics found in Puget Sound oysters.</span>
          <br />
          <br />
          <label htmlFor="q4o1">
            <input type="checkbox" id="q4o1" className="radio" />
            Five out of the ten sites examined had oysters that contained microplastics.
          </label><br />
          <label htmlFor="q4o2">
            <input type="checkbox" id="q4o2" className="radio" />
            Oysters in the Puget Sound contained an average amount of microplastics in them.
          </label><br />
          <label htmlFor="q4o3">
            <input type="checkbox" id="q4o3" className="radio" />
            The research results serve as a first baseline value for microplastics in oysters from Washington.
          </label>
          <br />
          <br />
        </li>
      </ol>
      <div className="buttons">
        <Link to="/result"><Button large="true" intent="primary">SHOW RESULTS</Button></Link>
      </div>
    </div>
  );
}

export default Quiz;
