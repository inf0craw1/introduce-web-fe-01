import React, { useRef, useCallback, useEffect } from "react";

import { ReactComponent as LocationIcon } from "assets/location.svg";
import { ReactComponent as CallIcon } from "assets/call.svg";
import { ReactComponent as EmailIcon } from "assets/email.svg";

import "./Contact.scss";

const Contact = () => {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, [mapRef]);

  useEffect(() => {
    if (window.google && window.google.maps) {
      initMap();
    }
  }, [initMap]);

  return (
    <div className="main contact">
      <div className="contact-content">
        <div className="contact-info-wrapper">
          <div className="contact-info-text">
            <div className="contact-title font-display-lg">Contact us</div>
            <div className="contact-detail font-text-md">
              <div className="contact-info-item">
                <CallIcon className="icon" />
                (Tel) 010-2088-9798
              </div>
              <div className="contact-info-item">
                <EmailIcon className="icon" />
                trackfarm@naver.com
              </div>
              <div className="contact-info-item">
                <LocationIcon className="icon" />
                Chungcheongnam-do Asan-si Baebangeup Heemangro 46beongil 45-11,
                502
              </div>
            </div>
          </div>
          <div
            className="map"
            style={{ width: "100%", aspectRatio: "3/2" }}
            ref={mapRef}
          ></div>
        </div>
        <div className="contact-form">form</div>
      </div>
    </div>
  );
};

export default Contact;
