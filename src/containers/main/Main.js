import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { throttle } from 'lodash';

import { Link } from 'components';

import Header from 'containers/header';
import Footer from 'containers/footer';

import './Main.scss';

const Main = () => {
  const menuRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = throttle(() => {
    setIsMobile(window.innerWidth < 960);
  }, 50);

  const handleClickOutside = useCallback(event => {
    console.log("event target is: ", event.target);
    if (!menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleClickMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // eslint-disable-line

  return (
    <div className={`container-wrapper${isMobile ? ' isMobile' : ''}`}>
      <div className={`container${isOpen ? ' isOpen' : ''}`}>
        <Header
          isMobile={isMobile}
          isOpen={isOpen}
          onClickMenu={handleClickMenu}
        />
        <div className='main'>
          <div className="video-responsive">
            <div className='iframe-container'>
              <iframe
                src='https://www.youtube.com/embed/LiNI-JUFtsA?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&start=0&end=30&playlist=LiNI-JUFtsA'
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className='background-overlay' />
          </div>
          <div className='content-divider-container'>
            <div className='content-divider'>
              <div className='content-divider-left'>
                AVALVE LAB
              </div>
              <div className='content-divider-right'>
                <div>
                  AVALVE provides an automated software solution that enables anyone without specialized knowledge to successfully cultivate fresh crops produced in smart farms through Big data-based deep learning technology, server-based IOT, Autonomous Driving, and Robot technology.
                </div>
                <div>
                  Seoul, Yongsan Lab. Institute.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer isMobile={isMobile} />
      </div>
      <div ref={menuRef} className={`menu${isOpen ? ' isOpen' : ''}`}>
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
      </div>
    </div>
  );
};

export default Main;
