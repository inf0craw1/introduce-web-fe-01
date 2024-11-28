import React, { useRef, useState, useCallback, useEffect } from "react";

import { throttle } from "lodash";

import { Link } from "components";

import Header from "containers/header";
import Footer from "containers/footer";
import Home from "containers/home";
import Company from "containers/company";
import Product from "containers/product";
import News from "containers/news";
import Contact from "containers/contact";

import "./Main.scss";

const PAGES = {
  "/": Home,
  "/company": Company,
  "/product": Product,
  "/news": News,
  "/contact": Contact,
};

const Main = ({ match: { path } }) => {
  const menuRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = throttle(() => {
    setIsMobile(window.innerWidth < 960);
  }, 50);

  const handleClickOutside = useCallback((event) => {
    if (!menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleClickMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  const Page = PAGES[path];

  return (
    <div className={`main-wrapper${isMobile ? " isMobile" : ""}`}>
      <div className={`main-container${isOpen ? " isOpen" : ""}`}>
        <Header
          isMobile={isMobile}
          isOpen={isOpen}
          onClickMenu={handleClickMenu}
        />
        <Page isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </div>
      <div ref={menuRef} className={`menu${isOpen ? " isOpen" : ""}`}>
        <Link to="/">HOME</Link>
        <Link to="/company">COMPANY</Link>
        <Link to="/product">PRODUCTS</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Main;
