import React, { useState } from 'react'
import PlayBtn from '../assets/images/misc/play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const VideoThumb = () => {

  const [src, setSrc] = useState('#');

  const openPopUp = () => {
    setSrc('https://www.youtube.com/embed/AkcJNHYE7cE?si=-NjdEA_URpvF8EQw');
    document.querySelector('.popUp').style.display = 'block';
    const timer = setTimeout(() => {
      document.querySelector('.iframeVdo').style.display = 'block';
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const closePopUp = () => {
    setSrc('#');
    document.querySelector('.iframeVdo').style.display = 'none';
    document.querySelector('.popUp').style.display = 'none';
  };
  return (
    <React.Fragment>
      <div className="video-container">
        <div className="video-content">
          <span className='videoTxt'>Performance</span>
          <span className='videoTxt'>Precision</span>
          <span className='videoTxt'>Power</span>
        </div>
        <div className="playBtn">
          <img src={PlayBtn} className='video_playBtn' alt="play_button" onClick={openPopUp} />
        </div>
      </div>
      <div className="popUp">
        <FontAwesomeIcon icon={faXmark} size='2x' onClick={closePopUp} />
        <iframe className='iframeVdo' src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </React.Fragment>
  )
}

export default VideoThumb