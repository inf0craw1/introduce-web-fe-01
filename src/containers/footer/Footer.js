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
              BY AVALVE CO, LTD. ALL RIGHTS RESERVED
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
              HeadOffice : 283, Bupyeong-daero, Bupyeong-gu, Incheon
            </p>
            <p>
              <LocationIcon fontSize='small' htmlColor='#cc9955' />
              Laboratory : Hana Building, 158, Wonhyo-ro, Yongsan-gu, Seoul
            </p>
            <p>
              <PhoneIcon fontSize='small' htmlColor='#cc9955' />
              (Tel) 02 - 3275 - 0110
            </p>
            <p>
              <PrintIcon fontSize='small' htmlColor='#cc9955' />
              (Fax) 02 - 3275 - 0112
            </p>
            <p>
              <EmailIcon fontSize='small' htmlColor='#cc9955' />
              avalve@naver.com
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
