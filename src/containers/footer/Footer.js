import React from "react";

import {
  LocationOn as LocationIcon,
  PhoneEnabled as PhoneIcon,
  Drafts as EmailIcon,
  LayersOutlined,
} from "@material-ui/icons";

import Logo from "assets/trackfarm_logo.png";

import "./Footer.scss";

const Footer = ({ isMobile }) => {
  return (
    <div className="footer-layout">
      <div className={`footer-container${isMobile ? " isMobile" : ""}`}>
        <div className="footer">
          <div className="footer-logo-container orange-1">
            <img alt="logo" src={Logo} className="footer-logo" />
          </div>
          <div className="footer-description-container">
            <div className="footer-description-title font-text-md">
              ADDRESS LIST
            </div>
            <div className="footer-description">
              <div className="description-item">
                <LocationIcon
                  className="icon"
                  fontSize="inherit"
                  htmlColor="#7FFC3B"
                />
                <p className="font-text-sm">
                  HeadOffice: Chungcheongnam-do Asan-si Baebangeup Heemangro
                  46beongil 45-11, 502
                </p>
              </div>
              <div className="description-item">
                <LocationIcon
                  className="icon"
                  fontSize="inherit"
                  htmlColor="#7FFC3B"
                />
                <p className="font-text-sm">
                  Laboratory: Gyeonggi-do Seongnam-si Sujeonggu Daewangpangyoro
                  815, Pangyo Startup-zone, 832
                </p>
              </div>
              <div className="description-item">
                <LocationIcon
                  className="icon"
                  fontSize="inherit"
                  htmlColor="#7FFC3B"
                />
                <p className="font-text-sm">
                  R&D Farm: Gangwon-do Hoengseong-gun Gonggeunmyeon Osanri
                  262-13
                </p>
              </div>
              <div className="description-item">
                <PhoneIcon
                  className="icon"
                  fontSize="inherit"
                  htmlColor="#7FFC3B"
                />
                <p className="font-text-sm">(Tel) 010-2088-9798</p>
              </div>
              <div className="description-item">
                <EmailIcon
                  className="icon"
                  fontSize="inherit"
                  htmlColor="#7FFC3B"
                />
                <p className="font-text-sm">trackfarm@naver.com</p>
              </div>
            </div>
          </div>
          <div className="footer-description-container">
            <div className="footer-description-title">LINKS LIST</div>
            <div className="footer-description">
              <div className="description-item">
                <p className="font-text-sm">Help Center</p>
              </div>
              <div className="description-item">
                <p className="font-text-sm">Community</p>
              </div>
              <div className="description-item">
                <p className="font-text-sm">Forums</p>
              </div>
              <div className="description-item">
                <p className="font-text-sm">Blog</p>
              </div>
              <div className="description-item">
                <p className="font-text-sm">Meetups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-layout">
        <div className="footer-copyright-container">
          <p>
            COPYRIGHTⓒ2020
            <br />
            BY TRACKFARM CO, LTD. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
