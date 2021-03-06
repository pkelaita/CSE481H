import React, { useState, useRef } from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import { Camera } from 'react-camera-pro';
import ReactCardFlip from 'react-card-flip';
import Data from './ClueData';

function Found(props) {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [takePhoto, setTakePhoto] = useState(true);
  const [confirmPhoto, setComfirmPhoto] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const location = useLocation();
  const { clueNumber, locations, images, fromFailed, res } = location.state;
  const [currLocation, setCurrLocation] = useState();

  let path = '';
  let buttonText = '';

  const nextClueOrEndOfHunt = () => {
    if (clueNumber === 5) {
      path = '/endofhunt';
      buttonText = 'COMPLETE HUNT';
    } else {
      path = '/clue';
      buttonText = 'NEXT CLUE';
    }
  };

  nextClueOrEndOfHunt();

  const handleTakePhoto = () => {
    setTakePhoto(false);
    setImage(camera.current.takePhoto());
    setCurrLocation(Data[locations[clueNumber - 2]]);
  };

  const handleUsePhoto = () => {
    setComfirmPhoto(false);
    setIsDisabled(false);
    console.log(clueNumber - 2);
    images[clueNumber - 2] = image;
    console.log(images);
  };

  const handleRetakePhoto = () => {
    setTakePhoto(true);
  };

  const flipCard = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const takePhotoElement =
  (
    <div className="camera">
                   <Camera ref={camera} aspectRatio={1 / 1} />
                   <div className="take-or-switch">
                    <button onClick={handleTakePhoto} type="submit">TAKE PHOTO</button>
                    <button type="submit" onClick={() => { camera.current.switchCamera(); }}>SWITCH CAMERA</button>
                   </div>
    </div>
  );

  const showSaveOrRetake =
  (
    <div className="save-or-retake">
      <button type="submit" onClick={handleUsePhoto}>USE PHOTO</button>
      <p><b>OR</b></p>
      <button type="submit" onClick={handleRetakePhoto}>RETAKE</button>
    </div>
  );

  const flippingCard =
  (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <img src={image} alt="image" className="photo" onClick={flipCard} />

      <div className="fact-card" onClick={flipCard}>
        <p>{Data[locations[clueNumber - 2]].phrase}</p>
        <p>{Data[locations[clueNumber - 2]].short}</p>
      </div>
    </ReactCardFlip>
  );

  const showTakenPhoto =
  (
    <div>
      <p>Click on the photo/fact card below to view the other side</p>
      {flippingCard}
      { confirmPhoto ? showSaveOrRetake : null }
    </div>
  );

  return (
    <div className="app-width">
      <h1>You found the clue!</h1>
      { takePhoto ? takePhotoElement : showTakenPhoto }
      <div className="buttons">
        <Link to={{
          pathname: path,
          state: {
            clueNumber: clueNumber,
            locations: locations,
            images: images,
            fromFailed: null,
            res: -1,
          },
        }}
        >
          <Button disabled={isDisabled} large="true" intent="primary">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Found;
