import React from 'react';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import { Link } from 'components';

import Logo from 'assets/cropped-logo-1-2048x562.png';

import './Header.scss';

const Header = ({
  isMobile,
  isOpen,
  onClickMenu,
}) => {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header-left'>
          <Link to='/'>
            <img alt='logo' src={Logo} height='20' />
          </Link>
        </div>
        <div className='header-right'>
          {isMobile ? (
            <button
              className='menu-button'
              type='button'
              onClick={onClickMenu}
            >
              {isOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>
          ) : (
            <>
              <Link to='/'>
                HOME
              </Link>
              <Link to='/company'>
                COMPANY
              </Link>
              <Link to='/project'>
                PROJECT
              </Link>
              <Link to='/notice'>
                NOTICE
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
