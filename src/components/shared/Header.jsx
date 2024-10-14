import { useState, useEffect } from "react";
import Styles from "../../styles/components/shared/header.module.css";

export default function Header() {
  const {
    header,
    headerLogo,
    largManu,
    smallMenu,
    menuToggeler,
    smallMenuShow,
    showMenu,
    hideMenu,
    headerNavBtnBox,
    button,
  } = Styles;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuShow, setIsMenuShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuToggeling = () => {
    setIsMenuShow(!isMenuShow);
  };
  return (
    <header className={header}>
      <img src="/network.svg" alt="Company Logo" className={headerLogo} />
      <nav>
        <div className={headerNavBtnBox}>
          <button className={`${menuToggeler}`} onClick={menuToggeling}>
            <div className={`menu-toggler-icon-box ${isMenuShow && "active"}`}>
              <div className={`line`}></div>
              <div className={`line`}></div>
              <div className={`line`}></div>
            </div>
          </button>
        </div>
        <div
          className={`${screenWidth > 768 ? largManu : smallMenu} ${
            isMenuShow && smallMenuShow
          }`}
        >
          <div className={`${isMenuShow ? showMenu : hideMenu}`}>
            <ul>
              <li>
                <a href="/" aria-label="Go to Home">
                  Home
                </a>
              </li>
              <li>
                <a href="/admin" aria-label="Learn more about us">
                  Admin
                </a>
              </li>
              <li>
                <a href="/login">
                  <button aria-label="Login" className={button}>
                    Login
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
