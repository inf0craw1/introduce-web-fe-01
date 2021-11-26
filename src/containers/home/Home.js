import React from 'react';

import CountUp from 'react-countup';

import Img1 from 'assets/11.jpg';
import Img2 from 'assets/12.jpg';
import Img3 from 'assets/13.jpg';

import './Home.scss';

const Home = () => {
  return (
    <div className='main'>
      <div className="video-responsive">
        <div className='iframe-container'>
          <iframe
            src='https://youtube.com/embed/UtZPl7WS3KI?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&start=65&end=660&playlist=pr-ayQwckEE'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className='background-overlay'>
          <div className='background-overlay-content'>
            <div>
              <span>
                __Smart Livestock Farming
              </span>
              <div>
                TRACKFARM
              </div>
            </div>
            <div>
              <div>
                <CountUp
                  end={8000}
                  duration={2}
                />
                <span>
                  +
                </span>
              </div>
              <div>
                <div>
                  Individual
                </div>
                <div>
                  Pig Model Data
                </div>
              </div>
            </div>
            <div>
              <div>
                <CountUp
                  end={10}
                  duration={1}
                />
                <span>
                  +
                </span>
              </div>
              <div>
                <div>
                  small and medium-sized
                </div>
                <div>
                  farm partnership
                </div>
              </div>
            </div>
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
              Deep Learning Pig Farm Healthcare
              <br />
              <br />
              With Track Farm, Disease prediction, Object management, and Productivity management can be efficiently performed.
            </div>
            <div>
              Seoul, Yongsan Lab. Institute.
            </div>
          </div>
        </div>
      </div>
      <div className='content-below-container'>
        <div className='content-below'>
          <img alt='img1' src={Img1} />
          <div>
            <h1>
              Deep tech
            </h1>
          </div>
        </div>
        <div className='content-below'>
          <img alt='img2' src={Img2} />
          <div>
            <h1>
              Farm tech
            </h1>
            <div>
              Future Livestock
            </div>
          </div>
        </div>
        <div className='content-below'>
          <img alt='img3' src={Img3} />
          <div>
            <h1>
              Sustainable Breeding
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
