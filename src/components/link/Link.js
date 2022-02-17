import React from 'react';

import { Link as LinkBase } from 'react-router-dom';

import './Link.scss';

const Link = ({
  to,
  children,
}) => {
  return (
    <LinkBase className='link' to={to}>
      <span>
        {children}
      </span>
    </LinkBase>
  );
};

export default Link;
