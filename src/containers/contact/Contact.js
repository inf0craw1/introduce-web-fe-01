import React, { useRef, useCallback, useEffect, useState } from "react";
import { ReactComponent as LocationIcon } from "assets/location.svg";
import { ReactComponent as CallIcon } from "assets/call.svg";
import { ReactComponent as EmailIcon } from "assets/email.svg";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    const location = { lat: 36.7899054, lng: 127.1072841 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: location,
      map,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

  const sendVerificationEmail = () => {
    const templateParams = {
      to_email: "inf0craw1@naver.com",
      message: formData.message,
      phone_number: formData.phone,
      from_name: formData.name,
      email: formData.email,
    };

    setIsSubmitting(true);
    emailjs
      .send(
        "service_1qkwh6k",
        "template_vvkb6r9",
        templateParams,
        "ZpsD1CsLGNa5AmtNo"
      )
      .then((response) => {
        console.log("이메일이 성공적으로 보내졌습니다:", response);
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
      sendVerificationEmail();
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
            style={{ width: "100%", aspectRatio: "5/3" }}
            ref={mapRef}
          ></div>
        </div>

        <div className="contact-form font-text-md">
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
              <p>인증 이메일이 성공적으로 발송되었습니다.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
