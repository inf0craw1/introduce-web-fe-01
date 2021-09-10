import React from 'react';

import {
  LocationOn as LocationIcon,
  PhoneEnabled as PhoneIcon,
  Print as PrintIcon,
  Drafts as EmailIcon,
} from '@material-ui/icons';

import Logo from 'assets/cropped-logo-1-2048x562.png';

import './Footer.scss';

const Footer = ({
  isMobile,
}) => {
  return (
    <div className={`footer-container${isMobile ? ' isMobile' : ''}`}>
      <div className='footer'>
        <div>
          <div>
            <img alt='logo' src={Logo} height='30' />
          </div>
          <div className='footer-title'>
            <p>AVALVE INC</p>
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
              <div>
                HeadOffice : 283, Bupyeong-daero, Bupyeong-gu, Incheon
              </div>
            </p>
            <p>
              <LocationIcon fontSize='small' htmlColor='#cc9955' />
              <div>
                Laboratory : Hana Building, 158, Wonhyo-ro, Yongsan-gu, Seoul
              </div>
            </p>
            <p>
              <PhoneIcon fontSize='small' htmlColor='#cc9955' />
              <div>
                (Tel) 02 - 3275 - 0110
              </div>
            </p>
            <p>
              <PrintIcon fontSize='small' htmlColor='#cc9955' />
              <div>
                (Fax) 02 - 3275 - 0112
              </div>
            </p>
            <p>
              <EmailIcon fontSize='small' htmlColor='#cc9955' />
              <div>
                avalve@naver.com
              </div>
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
