import React from 'react';
import { Button, Checkbox } from '@blueprintjs/core';

function Quiz(props) {
  return (
    <div>
      <p>Quiz Time!</p>
      <ol>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
        <li>
          Question one
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
          <Checkbox>Option one</Checkbox>
        </li>
      </ol>
      <Button large="true" intent="primary">REVIEW ALBUM</Button>
      <Button large="true" intent="primary">TAKE QUIZ</Button>
    </div>
  );
}

export default Quiz;
