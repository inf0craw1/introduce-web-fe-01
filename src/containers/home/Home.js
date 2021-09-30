import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <div className='main'>
      <div className="video-responsive">
        <div className='iframe-container'>
          <iframe
            src='https://www.youtube.com/embed/pr-ayQwckEE?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&start=65&end=660&playlist=pr-ayQwckEE'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className='background-overlay'>
          <div className='background-overlay-content'>
            양돈농가의 질병예찰 및 관리효율성 향상을 위한
            <br />
            <span className='orange-1'>
              AI 돼지 모션 인식 관리시스템 트랙팜(Track Farm)
            </span>
          </div>
        </div>
      </div>
      <div className='content-divider-container'>
        <div className='content-divider'>
          <div className='content-divider-left'>
            TRACK FARM
          </div>
          <div className='content-divider-right'>
            <div>
              TRACK FARM provides an automated software solution that enables anyone without specialized knowledge to successfully cultivate fresh crops produced in smart farms through Big data-based deep learning technology, server-based IOT, Autonomous Driving, and Robot technology.
            </div>
            <div>
              Seoul, Yongsan Lab. Institute.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
