import React from 'react';
import { Button, RadioGroup, Radio, Checkbox } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

function Quiz(props) {
  return (
    <div className="app-width">
      <h1>Quiz Time!</h1>
      <ol>
        <li>
          What are some of the impacts that 1.4 million and more seagulls feeding in North American landfills have on the environment?
          <RadioGroup className="radio">
            <Radio label="Higher mortality rates of seagulls in the surrounding region due to aircrafts." value="one" />
            <Radio label="Extra tens to hundreds of tons of nitrogen and phosphorus in nearby lakes and reservoirs." value="two" />
            <Radio label="Increased costs for local governments to maintain water quality levels." value="three" />
          </RadioGroup>
        </li>
        <li>
          What are the environmental benefits of organic farms over conventional farms? Select all that apply.
          <RadioGroup className="radio">
            <Radio label="Crop yields for organic farms are always greater than conventional farms." value="one" />
            <Radio label="More energy efficient and better soil quality." value="two" />
            <Radio label="Less pollution from insecticides leads to greater biodiversity." value="three" />
          </RadioGroup>
        </li>
        <li>
          Select all of the true statements about microplastics.
          <RadioGroup className="radio">
            <Radio label="All 69 water samples that Puget Soundkeeper collected between 2019 to 2020 contained microplastics." value="one" />
            <Radio label="Plastic is biodegradable and only certain types of plastic break down into microplastics." value="two" />
            <Radio label="60% of all plastic produced is currently in landfills or in the environment and can break down into microplastics." value="three" />
          </RadioGroup>
        </li>
        <li>
          What is the correct way to dispose of water-based paints according to King County guidelines?
          <RadioGroup className="radio">
            <Radio label="It is safe to dump all water-based paints down the drain." value="one" />
            <Radio label="Dry out any water-based paint and discard the dry paint in the trash." value="two" />
            <Radio label="Throwing all (not yet dried) water-based paint in the trash is safe." value="three" />
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
