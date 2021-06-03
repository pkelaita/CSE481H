import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, RadioGroup, Radio, Checkbox } from '@blueprintjs/core';
import Data from './ClueData';

function Quiz(props) {
  const location = useLocation();
  const { locations } = location.state;

  let results = [true, true, true, true];
  const [result, setResult] = useState(0);

  const getResult = (res) => {
    let count = 0;
    for (let i = 0; i < res.length; i++) {
      if (results[i]) {
        count++;
      }
    }
    return count;
  };

  const handleChange = (e, qNum, res) => {
    if (e.target.value === 'true') {
      res[qNum] = true;
    } else {
      res[qNum] = false;
    }
    console.log(res);
    setResult(getResult(res));
  };

  const label = (qNum, currLocation, qname, id) => (
    <label htmlFor={id + '3'}>
      <input value={currLocation.ansOptions[2].isCorrect} type={currLocation.qtype} id={id + '3'} name={qname} className={currLocation.qtype} onClick={(e) => handleChange(e, qNum, results)} />
      {currLocation.ansOptions[2].text}
    </label>
  );

  const li = (qNum, currLocation, qname, id) => (
    <li>
      <span>{currLocation.question}</span>
      <br />
      <br />
      <label htmlFor={id + '1'}>
        <input value={currLocation.ansOptions[0].isCorrect} type={currLocation.qtype} id={id + '1'} name={qname} className={currLocation.qtype} onClick={(e) => handleChange(e, qNum, results)} />
        {currLocation.ansOptions[0].text}
      </label><br />
      <label htmlFor={id + '2'}>
        <input value={currLocation.ansOptions[1].isCorrect} type={currLocation.qtype} id={id + '2'} name={qname} className={currLocation.qtype} onClick={(e) => handleChange(e, qNum, results)} />
        {currLocation.ansOptions[1].text}
      </label><br />
      { (currLocation.ansOptions.length > 2) ? label(qNum, currLocation, qname, id) : null }
      <br />
      <br />
    </li>
  );

  const getLi = (qNum, qname) => {
    const currLocation = Data[locations[qNum]];
    return li(qNum, currLocation, qname);
  };

  return (
    <div className="app-width">
      <h1>Quiz Time!</h1>
      <ol>
        {getLi(0, 'question1', 'q1o')}
        {getLi(1, 'question2')}
        {getLi(2, 'question3')}
        {getLi(3, 'question4')}
      </ol>
      <div className="buttons">
        <Link to={{
          pathname: '/result',
          state: {
            res: result,
          },
        }}
        >
          <Button large="true" intent="primary">SHOW RESULTS</Button>
        </Link>
        { console.log(result) }
      </div>
    </div>
  );
}

export default Quiz;
