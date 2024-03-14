import React from 'react';

import {
  LocationOn as LocationIcon,
  PhoneEnabled as PhoneIcon,
  Print as PrintIcon,
  Drafts as EmailIcon,
} from '@material-ui/icons';

import './Footer.scss';

const Footer = ({
  isMobile,
}) => {
  return (
    <div className={`footer-container${isMobile ? ' isMobile' : ''}`}>
      <div className='footer'>
        <div>
          <div className='footer-title orange-1'>
            TRACK FARM
          </div>
          <div className='footer-description'>
            <p>
              COPYRIGHTⓒ2020
              <br />
              BY TRACKFARM CO, LTD. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
        <div>
          <div className='footer-title'>
            ADDRESS LIST
          </div>
          <div className='footer-description'>
            <p>
              <LocationIcon fontSize='small' htmlColor='#cc9955' />
              HeadOffice: Chungcheongnam-do Asan-si Baebangeup Heemangro 46beongil 45-11, 502
            </p>
            <p>
              <LocationIcon fontSize='small' htmlColor='#cc9955' />
              Laboratory: Gyeonggi-do Seongnam-si Sujeonggu Daewangpangyoro 815, Pangyo Startup-zone, 832
            </p>
            <p>
              <LocationIcon fontSize='small' htmlColor='#cc9955' />
              R&D Farm: Gangwon-do Hoengseong-gun Gonggeunmyeon Osanri 262-13
            </p>
            <p>
              <PhoneIcon fontSize='small' htmlColor='#cc9955' />
              (Tel) 010-2088-9798
            </p>
            <p>
              <EmailIcon fontSize='small' htmlColor='#cc9955' />
              trackfarm@naver.com
            </p>
          </div>
        </div>
        <div>
          <div className='footer-title'>
            LINKS LIST
          </div>
          <div className='footer-description'>
            <p>
              Help Center
            </p>
            <p>
              Community
            </p>
            <p>
              Forums
            </p>
            <p>
              Blog
            </p>
            <p>
              Meetups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
