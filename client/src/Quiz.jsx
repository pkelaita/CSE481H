import React from 'react';
import { Button, RadioGroup, Radio, Checkbox } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Quiz(props) {
  return (
    <div className="app-width">
      <p>Quiz Time!</p>
      <ol>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
        <li>
          Question one
          <RadioGroup>
            <Radio label="option one" value="one" />
            <Radio label="option two" value="two" />
            <Radio label="option three" value="three" />
          </RadioGroup>
        </li>
      </ol>
      <div className="buttons">
        <Link to="/result"><Button large="true" intent="primary">SHOW RESULTS</Button></Link>
      </div>
    </div>
  );
}

export default Quiz;
