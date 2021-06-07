import { React, useState } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { Button, RadioGroup, Radio, Checkbox } from '@blueprintjs/core';
import axios from 'axios';
import Data from './ClueData';

function Quiz(props) {
  const location = useLocation();
  const { clueNumber, locations, images, fromFailed, res } = location.state;
  const [path, setPath] = useState('');
  const [show, setShow] = useState(true);

  let results = [0, 0, 0, 0];
  const [result, setResult] = useState(-1);

  const getResult = () => {
    console.log('results:');
    console.log(results);
    let map = {};
    for (let i = 0; i < 4; i++) {
      map[locations[i]] = results[i];
    }
    let temp = { options: map };
    console.log(temp);
    temp = JSON.parse(JSON.stringify(temp));
    axios.post('https://envirohunt.herokuapp.com/api/submit', temp).then((response) => {
      setResult(response);
      if (response < 3) {
        setPath('/failedquiz');
      } else {
        setPath('/result');
      }
      console.log(result);
      setShow(false);
    });
  };

  const redirect = (
    <Redirect to={{
      pathname: path,
      state: {
        clueNumber: -1,
        locations: locations,
        images: images,
        fromFailed: null,
        res: result,
      },
    }}
    />
  );

  const handleChange = (e, qNum) => {
    results[qNum] = e.target.value;
    console.log(results);
  };

  const label = (qNum, currLocation, qname, id) => (
    <label htmlFor={id + '3'}>
      <input value={3} type={currLocation.qtype} id={id + '3'} name={qname} className={currLocation.qtype} onChange={(e) => handleChange(e, qNum)} />
      {currLocation.ansOptions[2].text}
    </label>
  );

  const li = (qNum, currLocation, qname, id) => (
    <li>
      <span>{currLocation.question}</span>
      <br />
      <br />
      <label htmlFor={id + '1'}>
        <input value={1} type={currLocation.qtype} id={id + '1'} name={qname} className={currLocation.qtype} onChange={(e) => handleChange(e, qNum)} />
        {currLocation.ansOptions[0].text}
      </label><br />
      <label htmlFor={id + '2'}>
        <input value={2} type={currLocation.qtype} id={id + '2'} name={qname} className={currLocation.qtype} onChange={(e) => handleChange(e, qNum)} />
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

  const rest = (
    <div className="app-width">
      <h1>Quiz Time!</h1>
      <ol>
        {getLi(0, 'question1', 'q1o')}
        {getLi(1, 'question2', 'q2o')}
        {getLi(2, 'question3', 'q3o')}
        {getLi(3, 'question4', 'q4o')}
      </ol>
      <div className="buttons">
          <Button large="true" intent="primary" onClick={getResult}>SHOW RESULTS</Button>
        { console.log(result) }
      </div>
    </div>
  );

  return (
    <div>
      { show ? rest : redirect }
    </div>
  );
}

export default Quiz;
