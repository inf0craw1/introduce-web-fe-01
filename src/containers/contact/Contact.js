import React, { useRef, useCallback, useEffect, useState } from "react";
import { ReactComponent as LocationIcon } from "assets/location.svg";
import { ReactComponent as CallIcon } from "assets/call.svg";
import { ReactComponent as EmailIcon } from "assets/email.svg";
import emailjs from "emailjs-com";
import "./Contact.scss";

import Img1 from "assets/contact/farm1.png";
import Img2 from "assets/contact/farm2.png";
import Img3 from "assets/contact/farm3.png";
import Img4 from "assets/contact/farm4.png";

const contactImgs = [Img1, Img2, Img3, Img4];

const contactDetails = [
  { icon: <CallIcon />, text: "(Tel) 010-2088-9798" },
  { icon: <CallIcon />, text: "(Tel) 031-426-7772" },
  { icon: <EmailIcon />, text: "ycn@trackfarm.co.kr" },
  {
    icon: <LocationIcon />,
    text: "HeadOffice: Gyeonggi-do Uiwang-si Anyang Pangyo-ro 82, 607",
  },
  {
    icon: <LocationIcon />,
    text: "Laboratory: Gyeonggi-do Seongnam-si Sujeonggu Daewangpangyoro 815, Pangyo Startup-zone, 832",
  },
  {
    icon: <LocationIcon />,
    text: "R&D Farm: Gangwon-do Hoengseong-gun Gonggeunmyeon Osanri 262-13",
  },
];

const locations = [
  { name: "Head Office", position: { lat: 37.3961809, lng: 126.9828084 } },
  {
    name: "Laboratory",
    position: { lat: 37.41386594530962, lng: 127.09866353717115 },
  },
  {
    name: "R&D Farm",
    position: { lat: 37.52386160007372, lng: 127.98114943848411 },
  },
];

const Contact = ({ isMobile }) => {
  const mapRefs = useRef([]);

  const initMaps = useCallback(() => {
    locations.forEach((location, index) => {
      const map = new window.google.maps.Map(mapRefs.current[index], {
        center: location.position,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: location.position,
        map,
        title: location.name,
      });
    });
  }, []);

  useEffect(() => {
    initMaps();
  }, [initMaps]);

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

  const sendEmail = () => {
    const templateParams = {
      message: formData.message,
      phone_number: formData.phone,
      from_name: formData.name,
      email: formData.email,
    };

    emailjs
      .send(
        "service_ozcy70f",
        "template_unjiy7p",
        templateParams,
        "0rUIX9_IacINKegWW"
      )
      .then((response) => {
        setIsEmailSent(true);
        setTimeout(() => setIsEmailSent(false), 3000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          agreeToTerms: false,
        });
      })
      .catch((error) => {
        console.error("이메일 보내기 실패:", error);
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.agreeToTerms) {
      setIsSubmitting(true);
      sendEmail();
    } else {
      alert("You must agree to the terms and conditions before submitting.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="main contact">
      <div className={isMobile ? "contact-content-mobile" : "contact-content"}>
        <div className={isMobile ? "" : "contact-info-wrapper"}>
          <div className="contact-info-text">
            <div
              className={
                isMobile
                  ? "contact-title-mobile font-display-sm"
                  : "contact-title font-display-lg"
              }
            >
              Contact us
            </div>
            <div
              className={
                isMobile
                  ? "contact-detail font-text-xs"
                  : "contact-detail font-text-md"
              }
            >
              {contactDetails.map((item, index) => (
                <div
                  className={
                    isMobile ? "contact-info-item-mobile" : "contact-info-item"
                  }
                  key={index}
                >
                  <div className="icon">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="maps-container">
            {locations.map((_, index) => (
              <div
                key={index}
                className="map"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  marginBottom: "20px",
                }}
                ref={(el) => (mapRefs.current[index] = el)}
              ></div>
            ))}
          </div>
        </div>

        <div
          className={
            isMobile
              ? "contact-form-mobile font-text-md"
              : "contact-form font-text-xs"
          }
        >
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="NAME*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="How can we help?*"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                required
              />
            </div>
            <div>
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <span></span>
                <div className="checkbox-text font-text-md">
                  I agree to the terms and conditions
                </div>
              </label>
            </div>
            <div>
              <button
                className="submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        {isEmailSent && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Your email has been sent successfully.</p>
            </div>
          </div>
        )}
      </div>
      <div className="content-below-container">
        <div className="background-overlay"></div>
        <div className={`img-content ${isMobile ? "img-content-mobile" : ""}`}>
          <div
            className={
              isMobile
                ? "img-title-mobile font-display-sm"
                : "img-title font-display-lg"
            }
          >
            TRACK FARM
          </div>
          <div className={isMobile ? "img-container-mobile" : "img-container"}>
            {contactImgs.map((item, index) => (
              <div key={index} className="img-item">
                <img src={item} alt={`img${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
