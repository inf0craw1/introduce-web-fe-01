import React from 'react';

import { ArrowRightAlt as ArrowIcon } from '@material-ui/icons';

import Img1 from 'assets/project01.png';
import Img2 from 'assets/project02.png';
import Img3 from 'assets/project02_2.png';

import { Link } from 'components';

import './Project.scss';

const Project = () => {
  return (
    <div className='main project'>
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
            AI SMART FARM SYSTEM
            <br />
            <Link to='/company'>
              CONTACT US
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className='content-divider-container'>
        <div className='content-divider'>
          <div className='content-divider-title'>
            OUR PROJECT
          </div>
          <div className='content-divider-content'>
            <div>
              <img alt='img1' src={Img1} />
              <p>
                PROJECT 01
              </p>
            </div>
            <div>
              <img alt='img1' src={Img2} />
              <p>
                PROJECT 02_1
              </p>
            </div>
            <div>
              <img alt='img1' src={Img3} />
              <p>
                PROJECT 02_2
              </p>
            </div>
          </div>
          <div className='content-divider-content'>
            <div>
              PROTO W218
            </div>
            <div>
              PROTO W204
            </div>
            <div>
              PROTO W204S
            </div>
          </div>
          <div className='content-divider-content'>
            <div>
              RELEASE NO.02
            </div>
            <div>
              R&D NO.4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
