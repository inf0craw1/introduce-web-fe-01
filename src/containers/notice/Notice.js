import React from 'react';

import { Link } from 'react-router-dom';

import notice from 'assets/notice.jpg';
import Img1 from 'assets/news1.png';
import Img2 from 'assets/news2.png';

import './Notice.scss';

const Notice = () => {
  return (
    <div className='main notice'>
      <div className="video-responsive">
        <img alt='img' src={notice} />
        <div className='background-overlay'>
          <div className='background-overlay-content'>
            <h1>
              About Us
            </h1>
            <div>
              TRACK FARM has an ICT Conversion Technology in Machine-Learning, Smart farm biz, and cloud platform.
            </div>
            <Link className='notice-contact' to='/company'>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <div className='content-divider-container'>
        <div className='content-divider'>
          <div className='content-divider-left'>
            TRACK FARM News
            <div className='news-headline' />
          </div>
        </div>
      </div>
      <div className='content-divider-container news-container'>
        <div className='content-divider'>
          <div className='content-divider-content'>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img'>
                  <img alt='img1' src={Img1} />
                </div>
                <p>
                  NEW INNOVATIVE TECHNOLOGY SESSIONS FOR LIVESTOCK PRODUCERS: ALL FARMERS WELCOME
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
              <Link className='news-link' to='/notice'>
                <div className='img'>
                  <img alt='img2' src={Img2} />
                </div>
                <p>
                  FARMTRACK IS SET TO REVOLUTIONIZE THE BEEF CATTLE INDUSTRY WITH THEIR EARLY ILLNESS DETECTION SYSTEM
                </p>
                <span>
                  Track Farm
                </span>
              </Link>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
