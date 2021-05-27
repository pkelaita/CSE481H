import React, { useState, useRef } from 'react';
import { Button } from '@blueprintjs/core';
import { Link, useLocation } from 'react-router-dom';
import { Camera } from 'react-camera-pro';

function Found(props) {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [takePhoto, setTakePhoto] = useState(true);
  const [confirmPhoto, setComfirmPhoto] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const location = useLocation();
  const { clueNumber } = location.state;

  let path = '';
  let buttonText = '';

  const nextClueOrEndOfHunt = () => {
    console.log(clueNumber);
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
  };

  const handleUsePhoto = () => {
    setComfirmPhoto(false);
    setIsDisabled(false);
  };

  const handleRetakePhoto = () => {
    setTakePhoto(true);
  };

  const takePhotoElement =
  (
    <div className="camera">
                   <Camera ref={camera} aspectRatio={16 / 9} />
                   <button onClick={handleTakePhoto} type="submit">TAKE PHOTO</button>
    </div>
  );

  const showSaveOrRetake =
  (
    <div className="save-or-retake">
      <button type="submit" onClick={handleUsePhoto}>Use photo</button>
      <p>OR</p>
      <button type="submit" onClick={handleRetakePhoto}>Retake photo</button>
    </div>
  );

  const showTakenPhoto =
  (
    <div>
      <img src={image} alt="image" />
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
          state: location.state,
        }}
        >
          <Button disabled={isDisabled} large="true" intent="primary">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Found;
